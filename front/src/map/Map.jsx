import BottomNav from "../globaltool/BottomNav";
import Container from "../globaltool/Container";
import KakaoMap from "./KakaoMap";
import MapSearch from "./MapSearch";

const Map = () => {
    return (
        <Container>
            <MapSearch />
            {/* <KakaoMap /> */}
            <BottomNav />
        </Container>
    );
};
export default Map;
