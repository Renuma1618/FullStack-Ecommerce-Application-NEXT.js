import { TrolleyIcon } from "@sanity/icons";
import { title } from "process";
import { defineType, defineField, validation } from "sanity";

export const productType = defineType({

    name: 'product',
    title: 'Products',
    type: 'document',
    icon:TrolleyIcon,
    fields: [
       defineField({
           name:'name',
           title:"Product Name",
           type:"string",
           validation :(Rule) =>Rule.required(),
       }),
         defineField({
              name:"slug",
              title:"Slug",
              type:"slug",
              options: {
                source: 'name',
                maxLength: 96,
              },
              validation: (Rule) => Rule.required(),
         }),
       defineField({
          name:"image",
            title:"Product Image",
            type:"image",
            options: {
                hotspot: true,//enables image cropping
            },
       }),
         defineField({
              name:"price",
              title:"Product Price",
              type:"number",   
             validation: (Rule) => Rule.required().min(0),
   
         }),
        defineField({
                name:"description",
                title:"Product Description",
                type:"blockContent",
          }),
         defineField({
            name:"categories",
            title:"Product Categories",
            type:"array",
            of: [{ type: "reference", to: [{ type: "category" }] }],
         }),
         defineField({
            name:"stock",
            title:"Product Stock",
            type:"number",
             validation: (Rule) => Rule.required().min(0),


         }),
        
    ],
    preview:({
        select: {
            title: 'name',
            media: 'image',
            price:"price",
        },
        prepare(selection) {
            return {
                title: selection.title ,
                media: selection.media,
                subtitle: `Price: $${selection.price}`,
            };
        },
    })
});