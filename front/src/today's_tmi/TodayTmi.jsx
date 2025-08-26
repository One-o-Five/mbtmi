import BottomNav from "../globaltool/BottomNav";
import Container from "../globaltool/Container";
import TopNav from "../globaltool/TopNav";
import TmiMain from "./TmiMain";
import TmiMbtiSearch from "./TmiMbtiSearch";

const TodayTmi = () => {
    return (
        <Container>
            <TopNav />
            <TmiMbtiSearch />
            <TmiMain />
            <BottomNav />
        </Container>
    );
};
export default TodayTmi;
