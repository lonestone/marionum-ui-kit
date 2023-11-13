import {ChangeEventHandler, useState} from "react";
import {
    Box,
    Input,
    InputGroup,
    InputRightElement,
    Menu,
    MenuButton,
    MenuItem,
    MenuList, Portal,
    Spacer
} from "@chakra-ui/react";
import {Button} from "../Button.tsx";

export type TitleSortAndSearchProps = {
    placeholderText: string,
    onSearch: (s: string) => void,
    onSort: (s: string) => void,
};

export const TitleSortAndSearch = ({placeholderText, onSearch, onSort}: TitleSortAndSearchProps) => {
    const [searchTxt, setSearchTxt] = useState('');
    const handleSearchTxtChange: ChangeEventHandler<HTMLInputElement> = e => setSearchTxt(e.target.value)
    const handleSearch = () => onSearch(searchTxt);

    return (
        <>
            <Box w="1px" h="1.5rem" marginLeft="16px" bgColor="gray.300"/>
            <Menu>
                <MenuButton as={Button} variant="lien" color="gray.700" paddingX="16px">
                    Trier
                </MenuButton>
                <Portal>
                    <MenuList>
                        <MenuItem onClick={() => onSort('Date')}>Date</MenuItem>
                        <MenuItem onClick={() => onSort('Application')}>Application</MenuItem>
                        <MenuItem onClick={() => onSort('Package')}>Package</MenuItem>
                    </MenuList>
                </Portal>
            </Menu>
            <Spacer/>
            <InputGroup width="557px" size='md'>
                <Input
                    pr="7rem"
                    type="text"
                    placeholder={placeholderText}
                    value={searchTxt}
                    onChange={handleSearchTxtChange}
                />
                <InputRightElement width="7rem">
                    <Button variant="primary" size="sm" onClick={handleSearch}> Rechercher </Button>
                </InputRightElement>
            </InputGroup>
        </>
    )
}