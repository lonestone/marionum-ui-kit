import {ReactNode, useRef, useState} from 'react'
import {useCombobox, UseComboboxGetInputPropsReturnValue} from 'downshift'
import {LayoutProps, List, ListItem, Portal, PositionProps} from "@chakra-ui/react";
import {useWindowSize} from 'marionum-ui-kit';


const satisfyingWidth = 250
const satisfyingMinHeight = 250;

export interface MultiselectProps {
    items: string[],
    selectedItems: string[],
    setSelectedItems: (updatedSelection: string[]) => void,
    children: (inputProps: UseComboboxGetInputPropsReturnValue) => ReactNode
}

/**
 * A helper to implement a Multiselect component. Rely on downshift for the state management and accessibility.
 * @param items The complete list of items available.
 * @param selectedItems The list of the selected items among the items available.
 * @param setSelectedItems Call this function to set a new selection.
 * @param children Expect a function that will be provided with the InputProps.
 * @example
 * const tags = [`Node`, `React`, `Python`, `.NET core`]
 * const [selectedTags, setSelectedTags] = useState<string[]>([]);
 *
 * return (<Multiselect items={tags} selectedItems={selectedTags} setSelectedItems={setSelectedTags}>
 *   {((inputProps) => (
 *     <Input name="tags" {...inputProps} placeholder='Ajouter ou rechercher un tag' />
 *   ))}
 * </Multiselect>)
 * @constructor
 */
export const Multiselect = ({items, selectedItems, setSelectedItems, children}: MultiselectProps) => {
    const [inputItems, setInputItems] = useState(items)
    const {
        isOpen,
        getLabelProps,
        getMenuProps,
        getInputProps,
        highlightedIndex,
        getItemProps,
    } = useCombobox({
        items: inputItems,
        onSelectedItemChange: ({selectedItem}) => {
            if (!selectedItem) {
                return
            }
            const index = selectedItems.indexOf(selectedItem)
            if (index > 0) {
                setSelectedItems([
                    ...selectedItems.slice(0, index),
                    ...selectedItems.slice(index + 1),
                ])
            } else if (index === 0) {
                setSelectedItems([...selectedItems.slice(1)])
            } else {
                setSelectedItems([...selectedItems, selectedItem])
            }
        },
        selectedItem: null,
        stateReducer: (state, actionAndChanges) => {
            const {changes, type} = actionAndChanges
            switch (type) {
                case useCombobox.stateChangeTypes.InputKeyDownEnter:
                case useCombobox.stateChangeTypes.ItemClick:
                    return {
                        ...changes,
                        isOpen: true, // keep menu open after selection.
                        highlightedIndex: state.highlightedIndex,
                        inputValue: '', // don't add the item string as input value at selection.
                    }
                case useCombobox.stateChangeTypes.InputBlur:
                    // just close on blur
                    return {
                        ...state,
                        isOpen: false
                    }
                default:
                    return changes
            }
        },
        onInputValueChange: ({inputValue}) => {
            setInputItems(
                items.filter((item) =>
                    item.toLowerCase().startsWith(inputValue?.toLowerCase() ?? ""),
                ),
            )
        },
    })
    const inputRef = useRef<HTMLInputElement | null>(null);
    const inputProps = getInputProps({
        ref: inputRef
    });

    const inputBounds = inputRef.current?.getBoundingClientRect()
    const windowSize = useWindowSize()
    // Layout props
    const layoutProps: LayoutProps = {
        minW: `${inputBounds ? inputBounds.width : 0}px`,
        maxH: `${
            inputBounds
                ? Math.max(windowSize.height - inputBounds.bottom - 15, satisfyingMinHeight)
                : satisfyingMinHeight
        }px`,
    }

    // Position props
    const positionProps: PositionProps = {
        top: `${inputBounds?.bottom || 0}px`,
    }

    // Determine alignment -> position + width
    if (inputBounds) {
        const alignRightWidth = inputBounds.right
        const alignLeftWidth = windowSize.width - inputBounds.left
        if (alignLeftWidth >= satisfyingWidth) {
            positionProps.left = inputBounds.left
            layoutProps.maxW = `${alignLeftWidth}px`
        } else if (alignRightWidth >= satisfyingWidth) {
            positionProps.right = windowSize.width - inputBounds.right
            layoutProps.maxW = `${alignRightWidth}px`
        } else {
            positionProps.left = 0
            layoutProps.w = '100vw'
        }
    }

    return (
        <div>
            <label {...getLabelProps()}></label>
            {children(inputProps)}
            <Portal>
                <List
                    {...getMenuProps(
                        {},
                        {
                            // Ignore error occuring when using a portal
                            suppressRefError: true,
                        }
                    )}
                    display={
                        isOpen && items.length > 0 && inputRef.current?.offsetHeight
                            ? ''
                            : 'none'
                    }
                    position="fixed"
                    overflow="auto"
                    zIndex="2000"
                    mt={1}
                    shadow="md"
                    border="1px solid"
                    borderColor="inherit"
                    borderRadius="md"
                    bgColor="white"
                    {...layoutProps}
                    {...positionProps}
                >
                    {inputItems.map((item, index) => {
                        const isSelected = selectedItems.includes(item);
                        return (
                            <ListItem px={2} py={1} fontSize="md"
                                      bgColor={highlightedIndex === index ? 'Marionum.200' : ''}
                                      key={`${item}${index}`}
                                      {...getItemProps({
                                          item,
                                          index,
                                          'aria-selected': isSelected,
                                      })}
                            >
                                <input type="checkbox" checked={isSelected} readOnly/> {item}
                            </ListItem>
                        );
                    })}
                </List>
            </Portal>
        </div>
    )
}
