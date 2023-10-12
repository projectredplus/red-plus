import React from "react";
import { Alert, HStack, Text, View, Link } from "native-base";
import { Alert as RNAlert } from "react-native";
import { RichEditor } from "react-native-pell-rich-editor";
import * as Clipboard from "expo-clipboard";


export function Tema({ tema }) {
  const [editorOpen, setEditorOpen] = React.useState(false);
  const [text, setText] = React.useState('');
  const editor = React.useRef();


  const editorHandle = (desc) => {
    if (desc) {
      setText(desc);
    } else {
      setText(null);
    }
  }

  const copyToClipboard = async (text) => {
    let formated = text.split('<div>').join('\n').split('</div>').join('');
    await Clipboard.setStringAsync(formated);
  }

  return (
    <React.Fragment>
      <View flex={1} w={"100%"}>
        <Link width={"100%"} py={"3px"} onPress={() => setEditorOpen(!editorOpen)}>
          <HStack width={"100%"} p={2} px={3} bg={"blueGray.500"} borderRadius={8} borderWidth={1} borderColor={"blueGray.200"}>
            <Text color={"white"} fontSize={18} bold fontWeight={"600"}>{tema}</Text>
          </HStack>
        </Link>
        {editorOpen
          ? (
            <View px={1}>
              <Alert colorScheme={"darkBlue"} mb={1}>Cole sua redação após clicar no botão abaixo!</Alert>
              <HStack>
                <RichEditor
                  scrollEnabled
                  pasteAsPlainText={true}
                  ref={editor} // from useRef()
                  onChange={editorHandle}
                  placeholder="Digite sua redação aqui"
                  androidHardwareAccelerationDisabled={true}
                  style={{
                    display: "flex",
                    width: "100%",
                    backgroundColor: "white",
                    borderWidth: 1,
                    borderColor: "#ddd",
                  }}
                  initialHeight={200}
                />
              </HStack>
              <Link
                href={text != null ? "https://app.glau.com.vc/aluno/praticar/nova-redacao" : null} borderRadius={4} alignItems={"center"} justifyContent={"center"} padding={3} mt={2} fontWeight={800} width={"100%"} bg={"darkBlue.400"} color={"white"}
                onPress={() => {
                  text != null ? copyToClipboard(text) : RNAlert.alert('Digite sua redação primeiro!')
                }}
              >
                <Text fontSize={18} fontWeight={700} color={"white"}>Corrigir (Glau)</Text>
              </Link>
            </View>
          ) : null}
      </View>
    </React.Fragment>
  );
}