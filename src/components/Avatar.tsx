import {Box} from '@chakra-ui/react'
import {BackgroundProps} from "@chakra-ui/styled-system";

interface AvatarProps {
    imageUrl?: BackgroundProps["backgroundImage"];
}

export const Avatar = ({imageUrl}: AvatarProps) => (
    <Box borderRadius={9999} backgroundColor="lightgray 50%" backgroundSize="cover" backgroundRepeat="no-repeat"
         backgroundImage={imageUrl} w={48} h={48}/>
)