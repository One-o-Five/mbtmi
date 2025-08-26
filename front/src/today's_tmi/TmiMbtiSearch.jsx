import styled from "styled-components";

const TmiMbtiSearch = () => {
    return (
        <SearchZone>
            <select name="" id="">
                <option value="" disabled selected hidden>
                    MBTI를 선택하세요
                </option>
                <option value="ISTJ">ISTJ</option>
                <option value="ISFJ">ISFJ</option>
                <option value="INFJ">INTJ</option>
                <option value="INFJ">ISTP</option>
                <option value="INFJ">ISFP</option>
                <option value="INFJ">INFP</option>
                <option value="INFJ">INTP</option>
                <option value="INFJ">ESTP</option>
                <option value="INFJ">ESFP</option>
                <option value="INFJ">ENFP</option>
                <option value="INFJ">ENTP</option>
                <option value="INFJ">ESTJ</option>
                <option value="INFJ">ESFJ</option>
                <option value="INFJ">ENFJ</option>
                <option value="INFJ">ENTJ</option>
            </select>
            <button>검색</button>
        </SearchZone>
    );
};

const SearchZone = styled.div`
    display: flex;
    gap: 12px;
    select {
        border-radius: 10px;
    }
`;

export default TmiMbtiSearch;
