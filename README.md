
# react-native-daum-postcode

![platforms](https://img.shields.io/badge/platforms-Android%20%7C%20iOS-brightgreen.svg?style=flat-square&colorB=191A17)
[![npm](https://img.shields.io/npm/v/react-native-daum-postcode.svg?style=flat-square)](https://www.npmjs.com/package/react-native-daum-postcode)
[![npm](https://img.shields.io/npm/dm/react-native-daum-postcode.svg?style=flat-square&colorB=007ec6)](https://www.npmjs.com/package/react-native-daum-postcode)
[![github issues](https://img.shields.io/github/issues/trabricks/react-native-daum-postcode.svg?style=flat-square)](https://github.com/trabricks/react-native-daum-postcode/issues)
[![github closed issues](https://img.shields.io/github/issues-closed/trabricks/react-native-daum-postcode.svg?style=flat-square&colorB=44cc11)](https://github.com/trabricks/react-native-daum-postcode/issues?q=is%3Aissue+is%3Aclosed)
[![Issue Stats](https://img.shields.io/issuestats/i/github/trabricks/react-native-daum-postcode.svg?style=flat-square&colorB=44cc11)](http://github.com/trabricks/react-native-daum-postcode/issues)


다음 우편번호 검색을 React-Native에서 쉽게 사용할 수 있도록 만든 플러그인입니다.

상세 설정은 https://spi.maps.daum.net/postcode/guidessl 를 참고하세요


## 사용법

```bash
npm install react-native-daum-postcode react-native-webview
```

## ios
```bash
cd ios && pod install && cd ..
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


 
