import React from 'react';
import styled from 'styled-components';
import { DEFAULT_SIZE_UNIT } from '../constants/sizes';

//Creates a styled component based on the rules and tag
const makeResponsiveComponent = (ruleSets, tagName = 'div') => {
    return styled(tagName)`
        ${buildStyles(ruleSets)}
    `;
};


const buildStyles = (rules = []) => {
    const styles = rules.reduce(
        (finalCssString, { constraint, width, rules }) => {
            if (typeof constraint === 'string') {
                return `${finalCssString} @media (${constraint}-width: ${width}${DEFAULT_SIZE_UNIT}) { ${rules} }`;
            }

            if (constraint.min && constraint.max) {
                return `${finalCssString} @media (min-width: ${constraint.min}${DEFAULT_SIZE_UNIT}) and (max-width: ${constraint.max}${DEFAULT_SIZE_UNIT}) { ${rules} }`;
            }

            return '';
        },
        ''
    );

    return styles;
};

export const hideAt = (breakpoints) => {
    const ruleSets = Object.entries(breakpoints).reduce(
        (rules, [constraint, width]) => [
        ...rules,
        { constraint, width, rules: `display: none` },
        ],
        []
    );

    return makeResponsiveComponent(ruleSets);
};

//A utility component for hiding items based on specified breakpoints
export const Breakpoint = ({ min, max, children }) => {
    const Component = hideAt({ min, max });
    return <Component>{children}</Component>;
};

/**
 *  Params
 *
 * @Rule
 * {
 *    constraint: 'min',
 *    width: '0',
 *    rules: `
 *      property: value;
 *    `
 * }
 *
 * @breakpoint
 * {
 *    min: "320px"
 * }
 */

export default makeResponsiveComponent;
