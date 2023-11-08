import {HeaderBlock, HeaderBlockProps} from "../blocks/Header/HeaderBlock.tsx";
import logoURL from "../../assets/Placeholder.png";
import {NavigationBlock} from "../blocks/Navigation/NavigationBlock.tsx";

const headerProps: HeaderBlockProps = {
    notify: true,
    logoURL,
    avatarURL: 'https://bit.ly/sage-adebayo',
    accountHref: '#mon-compte',
    homeHref: '#home',
    handleClickNotif: () => {
    }
}

export const SnapshotPage: React.FC = () => {
    return (
        <>
            <HeaderBlock {...headerProps}/>
            <NavigationBlock tabIndex={0} handleTabsChange={() => {}}/>
        </>
    );
};
