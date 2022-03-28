import { PageWrap } from "components/layouts";
import AlbumDetails from "components/AlbumDetails/AlbumDetails";
import { useMatch } from "@tanstack/react-location";

const Album = () => {
    const { params: id } = useMatch()

    return (
        <PageWrap
            title="Explore"
            overflowX={"hidden"}
            overflowY={"auto"}
            h={"100vh"}
            w={"full"}
        >
            <AlbumDetails albumId={id.id} />
        </PageWrap>
    );
};

export default Album;