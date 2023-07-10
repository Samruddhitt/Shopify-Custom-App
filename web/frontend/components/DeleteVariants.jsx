import { FormLayout, Select, Button} from "@shopify/polaris";
import CsvReader from "./CSVReaderr";

export default function DeleteVariants(){

    return(
        
            
           <FormLayout>
            <CsvReader/>

            <p class="yk-head-sm"><b>Choose the column for searching.</b> The value in this column of each row will be used to delete the selected variant data</p>

            <FormLayout.Group condensed>
                <Select
                label="USE"
                placeholder=" "
                options={['oz', 'g', 'kg', 'lb']}
                />
                <Select
                label="TO DELETE"
                placeholder=" "
                options={['Variant Barcode', 'Variant Price', 'Variant SKU', 'Variant Cost']}
                />
            </FormLayout.Group>
            <Button primary>Delete Variants</Button>
           </FormLayout>
           
        
    );

}