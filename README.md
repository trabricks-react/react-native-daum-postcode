
# react-native-daum-postcode

다음 우편번호 검색을 React-Native에서 쉽게 사용할 수 있도록 만든 플러그인입니다.

상세 설정은 https://spi.maps.daum.net/postcode/guidessl 를 참고하세요


## 사용법

```bash
npm install react-native-daum-postcode
```

```jsx
import Postcode from 'react-native-daum-postcode';

const YourView = () => (
    <Postcode
        style={{ width: 200, height: 200 }}
        jsOptions={{ animated: true }}
        onSelected={(data) => alert(JSON.stringify(data))}
    />
)
```

## Properties

기본 속성들은 Webview에 주입처리 됩니다.

아래 다른 속성은 맞춤형으로 사용하면됩니다.

---

### `jsOptions?: object`

다음우편번호찾기의 속성을 넣습니다.

아래 URL 참고하여 넣으시면 작동합니다.

https://spi.maps.daum.net/postcode/guidessl#attributes


---

### `onSelected: (data:Object) => void`

다음우편번호찾기 결과 JSON을 그대로 보내줍니다.

oncomplete 값을 그대로 전달받습니다.

---

## 남은 이야기

만드시다가 궁금한 점, 이상한 점이 있는 경우 깃허브 이슈 혹은 카카오톡 React & React-Native 오픈채팅방에 질문 남겨주시면 됩니다.

---

## 외주 문의

혹 RN으로 개발하시다가 어렵고 외주를 맡기시려면
아래 연락처로 연락주시면 친절하게 안내해드리겠습니다.

https://creamcookie.cc / project@creamcookie.cc


 
