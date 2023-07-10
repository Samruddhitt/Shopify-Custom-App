import { Card, FormLayout, Select, Button} from "@shopify/polaris";
import CsvReader from "./CSVReaderr";

export default function EditVriants(){

    return(
            
        <Card sectioned>
        <CsvReader />
        <FormLayout>
        <p class="yk-head-sm"><b>Choose the column for searching.</b> The value in this column of each row will be used to find product or variants to edit.</p>
         <FormLayout.Group condensed>
             <Select
             label="USE"
             placeholder=" "
             options={['oz', 'g', 'kg', 'lb']}
             />
             <Select
             label="AS"
             placeholder=" "
             options={['Variant Barcode', 'Variant Price', 'Variant SKU', 'Variant Cost']}
             />
         </FormLayout.Group>
         <p class="yk-head-sm"><b>Choose the column for editing.</b> The value in this column of each row will be used to update the matching product or variants.</p>
         <FormLayout.Group condensed>
             <Select
             label="USE"
             placeholder=" "
             options={['oz', 'g', 'kg', 'lb']}
             />
             <Select
             label="TO UPDATE"
             placeholder=" "
             options={['Variant Barcode', 'Variant Price', 'Variant SKU', 'Variant Cost']}
             />
         </FormLayout.Group>
         <Button primary>Start CSV Import Now</Button>
        </FormLayout>
      </Card> 
        
        
       
    );
}