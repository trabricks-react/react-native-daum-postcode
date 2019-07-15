import { WebViewProps } from "react-native";

interface PostCode extends WebViewProps {
  jsOptions: string;
  onSelected: (data: any) => void;
}

export default PostCode;
