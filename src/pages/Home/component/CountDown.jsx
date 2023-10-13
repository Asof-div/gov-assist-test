import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import moment from "moment";
import { useEffect, useRef, useState } from "react";
import { ElementColor } from "../../../constants/colors";



export const CountDown = () => {
    const eventTime = moment("2023-11-01");
    const currentTime = moment();
    const [duration, setDuration] = useState(moment.duration(eventTime.diff(currentTime)));
    const intervalRef = useRef(null);

    useEffect(() => {
        intervalRef.current = setInterval(function() {
            let nextDuration = moment.duration(duration - 1000, 'milliseconds');

            if (nextDuration.asSeconds() <= 0) {
                clearInterval(intervalRef.current);
            } else {
                setDuration(nextDuration);
            }
        }, 1000);
        return () => {                    
            clearInterval(intervalRef.current);
        };
    })

    return (
        <>
            <SimpleGrid columns={4} spacing={'3'}>
                <CountDownBox title={"DAYS"} value={duration.days()} />
                <CountDownBox title={"HOURS"} value={duration.hours()} />
                <CountDownBox title={"MINUTES"} value={duration.minutes()} />
                <CountDownBox title={"SECONDS"} value={duration.seconds()} />
            </SimpleGrid>
        </>
    )
}

export const CountDownBox = ({title, value}) => {
    

    return (
        <>
            <Box bgColor={ElementColor.darkPrimary} borderRadius='5px' padding='5px' flexDirection='column' alignItems='center' display='flex'>
                <Text fontSize='36px' fontWeight="900" color={ElementColor.white}>{value}</Text>
                <Text fontSize='12px' color={ElementColor.paleBlue}> {title} </Text>
            </Box>
        </>
    )
}