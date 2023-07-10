import { Card, Page, Layout, TextContainer, FormLayout, TextField, Select, ButtonGroup, Button } from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";
import { useState } from 'react';

import CsvReader from "../components/CSVReaderr";
import DeleteVriants from "../components/DeleteVariants";
import EditVriants from "../components/EditVariants";

export default function PageName() {

  const [isVisible, setIsVisible] = useState(true);

  const handleClick = event => {
    // 👇️ toggle visibility
    setIsVisible(!isVisible);
  };

  return (
    <Page>
      <TitleBar
        title="Upload CSV"
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

      <Layout>
        <Layout.Section>
          <h1 class="--p-color-text">FAQ</h1>
          <Card sectioned>
            <TextContainer>
              <p>Body Section</p>
            </TextContainer>
          </Card>
        </Layout.Section>
        <Layout.Section>
          <h1>Add or Delete</h1>
          <Card sectioned>
            <ButtonGroup>
              <Button primary id="my-toggle-button" onClick={handleClick}>Edit Variants</Button>
              <Button onClick={handleClick}>Delete Variants</Button>
            </ButtonGroup>
          </Card>
        </Layout.Section>
        <Layout.Section>
          {isVisible ? <EditVriants /> : <DeleteVriants />}
        </Layout.Section>
      </Layout>

    </Page>
  );


}
