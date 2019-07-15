import { WebViewProps } from "react-native";

export type oncomplete = {
  zoomcode: number;
  address: string;
  addressEnglish: string;
  addressType: "R" | "J";
  userSelectedType: "R" | "J";
  noSelected: "Y" | "N";
  userLanguageType: "K" | "E";
  roadAddress: string;
  roadAddressEnglish: string;
  jibunAddress: string;
  jibunAddressEnglish: string;
  autoRoadAddress: string;
  autoRoadAddressEnglish: string;
  autoJibunAddress: string;
  autoJibunAddressEnglish: string;
  buildingCode: number;
  buildingName: string;
  apartment: "Y" | "N";
  sido: string;
  sigungu: string;
  sigunguCode: string;
  roadnameCode: string;
  bcode: string;
  roadname: string;
  bname: string;
  bname1: string;
  bname2: string;
  hname: string;
  query: string;
  postcode: string;
  postcode1: string;
  postcode2: string;
  postcodeSeq: string;
};

export type onresize = {
  width: number;
  height: number;
};

export type onclose = "FORCE_CLOSE" | "COMPLETE_CLOSE";

export type themeObj = {
  bgColor?: string;
  searchBgColor?: string;
  contentBgColor?: string;
  pageBgColor?: string;
  textColor?: string;
  queryTextColor?: string;
  postcodeTextColor?: string;
  emphTextColor?: string;
  outlineColor?: string;
};

interface PostCode extends WebViewProps {
  /**
   * 다음 우편번호 찾기 서비스의 옵션을 설정할 수 있습니다.
   */
  jsOptions?: {
    /**
     * 우편번호 찾기 화면에서 애니메이션 효과를 줍니다. 기본값은 false로 설정되어 있습니다.
     */
    animation?: boolean;
    /**
     * 기본값은 true로 설정되어 있으며, 매핑된 주소가 여러개일 경우 사용자가 '선택 안함'을 클릭할 수 있도록 합니다. 또한 연관주소를 선택하지 않고 메인주소를 선택하더라도 연관주소 중 첫번째 항목이 자동으로 데이터에 들어가게 됩니다. 데이터는 oncomplete 인자 중 autoRoadAddress 또는 autoJibunAddress 항목에 첫번째 매핑 주소가 들어갑니다.
     * false로 설정을 하면 '선택 안함'이라는 항목이 노출되지 않고, 사용자가 반드시 매핑된 주소들 중 하나를 선택하도록 할 수도 있습니다. 하지만, 매핑된 주소를 정확히 모르는 사용자에게는 불편을 줄 수 있고, 1:N, M:N 관계의 주소에서는 메인주소가 선택이 되지 않기 때문에, 가급적 사용하지 않기를 권장합니다.
     */
    autoMapping?: boolean;
    /**
     * 검색된 주소와 내려가는 데이터의 '시','도' 부분을 축약 표시합니다(한글 주소만 해당). 기본값은 true로 설정되어 있습니다.
     * (서울특별시 -> 서울, 광주광역시 -> 광주, 전라북도 -> 전북, 단, '세종특별자치시' '제주특별자치도'는 지자체의 요청에 의해 제외)
     */
    shorthand?: boolean;
    /**
     * 검색결과가 많을시 검색바 아래의 가이드 영역을 강조시켜 주는 기능입니다. 기본값은 0(비활성)입니다.
     * 가이드 문구는 첫화면의 가이드 문구와 동일하며, 조합방식과 예시를 설명하여 사용자에게 재검색을 유도할 수 있도록 하는 기능입니다.
     * 입력값으로는 페이지 넘버가 들어가게 되며, 3~20까지 입력 가능합니다.
     */
    pleaseReadGuide?: number;
    /**
     * pleaseReadGuide 옵션과 같이 사용되는 옵션으로 선택사항입니다. 기본값은 1.5(1.5초간 강조)이며 입력하지 않으면 기본값으로 동작합니다.
     * 입력값 설정 단위는 '초'단위로 설정할 수 있으며, 0.1~60까지 입력 가능합니다.
     */
    pleaseReadGuideTimer?: number;
    /**
     * 검색어 입력시 검색바 아래에 뜨는 서제스트의 최대 검색 갯수를 조절할 수 있는 옵션입니다. 기본값은 10개이며 입력하지 않거나 1~10을 벗어나는 수를 입력시 기본값으로 셋팅됩니다.
     */
    maxSuggestItems?: number;
    /**
     * 기본값은 false이며 기존보다 행정동 정보를 좀 더 많이 보여주게 하는 옵션입니다.
     * 해당 기능을 활성화 하면 검색 결과의 행정동과 법정동이 다른 경우 무조건 표시를 하고 데이터를 내리게 됩니다. 그래서 법정동과 행정동이 같은 경우에는 표시하지 않으며, 데이터 또한 내리지 않습니다.
     */
    showMoreHName?: boolean;
    /**
     * 기본값은 false이며 검색 결과의  "지도" 버튼을 가릴 수 있는 옵션입니다. 다만, 해당 기능은 자신의 주소에 익숙하지 못한 사용자들에 도움을 주는 기능으로, app에 임베딩을 해야되는 상황이거나 버튼이 눌러지면 안되는 상황일때 선택적으로 이용하시는 것을 권장합니다.
     */
    hideMapBtn?: boolean;
    /**
     * 기본값은 false이며 검색 결과의  "영문 보기" 버튼을 가릴 수 있는 옵션입니다. 다만, 해당 기능은 자신의 주소에 익숙하지 못한 사용자들에 도움을 주는 기능으로, app에 임베딩을 해야되는 상황이거나 버튼이 눌러지면 안되는 상황일때 선택적으로 이용하시는 것을 권장합니다.
     */
    hideEngBtn?: boolean;
    /**
     * 기본값은 false이며 검색 결과의 한글과 영문 주소를 동시에 볼 수 있게 해주는 기능입니다, 해당 기능 활성화시 "영문보기" 버튼은 감춰집니다.
     * (hideEngBtn 속성의 설정 값보다 우선시 됩니다.)
     */
    alwaysShowEngAddr?: boolean;
    /**
     * 기본값은 false이며 검색 결과에서 구우편번호(6자리)를 모두 보이지 않게 합니다. 구우편번호가 더이상 업데이트가 되지 않기 때문에, 추후 완전히 제거가 되기전까지 구우편번호를 가리고 싶으신 분들만 사용하시면 됩니다.
     */
    zonecodeOnly?: boolean;
    /**
     * 우편번호 찾기 화면의 색상 테마를 변경할 수 있습니다. 기본값은 null입니다.
     */
    theme?: themeObj;
  };
  /**
   * 우편번호 검색 결과 목록에서 특정 항목을 클릭한 경우, 해당 정보를 받아서 처리할 콜백 함수를 정의하는 부분입니다.(null값 또는 정의하지 않을 시에 검색은 가능하지만, 결과 항목을 클릭하면 아무 일도 일어나지 않습니다.)
   * 이 함수를 정의할때 넣는 인자에는 우편번호 검색 결과 목록에서 사용자가 클릭한 주소 정보가 들어가게 됩니다.
   */
  onSelected: (data: oncomplete) => void;
}

export default PostCode;
