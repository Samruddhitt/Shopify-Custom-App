import { Card, Page, Layout, TextContainer, Heading, DropZone , ButtonGroup, Button} from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";


export default function ImportCsv(){
    return(
    <Page>
      <TitleBar
        title="Import CSV"
        primaryAction={{
          content: "Have questions? ",
          onAction: () => console.log("Primary action New"),
        }}
        secondaryActions={[
          {
            content: "Ask Help",
            onAction: () => console.log("Secondary action"),
          },
        ]}
      />
      </Page>
    );
}