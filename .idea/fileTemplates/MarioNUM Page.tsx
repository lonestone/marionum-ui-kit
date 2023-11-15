import {Block, TitleBlock} from "marionum-ui-kit";
import {NavigationExample} from "../../examples/Navigation/NavigationExample.tsx";
import {exampleHeaderProps, HeaderExample} from "../../examples/Header/HeaderExample.tsx";

export const ${NAME}: React.FC = () => {
    return (
        <>
            <HeaderExample {...exampleHeaderProps}/>
            <NavigationExample tabIndex={0} handleTabsChange={() => {
            }}/>
            <TitleBlock label="${NAME}">
            </TitleBlock>
            <Block backgroundColor="Marionum.50" paddingY="44px" hasBottomBorder>
            </Block>
        </>
    );
};
