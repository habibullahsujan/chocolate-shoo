'use client';
import CustomInput from '@/components/CustomInput';
import CustomSelect from '@/components/CustomSelect';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { uploadStagedFile } from '@/lib/uploadFileToCloudianry';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2 } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

const validationSchema = z.object({
    code: z.string(),
    nameEn: z.string(),
    nameAr: z.string(),
    category: z.string(),
    status: z.string(),
    price: z.string(),
});
type FormValues = z.infer<typeof validationSchema>;

type Props = {
    id?: string;
    defaultValues?: FormValues & { image: string };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onSubmit: (values: any) => void;
    disabled?: boolean;
    categoryOptions: { label: string, value: string }[];
    statusOptions: { label: string, value: string }[];
};

const ProductForm = ({id, defaultValues, onSubmit, categoryOptions, statusOptions }: Props) => {
    const [selectImage, setSelectImage] = useState<Blob | File | undefined>(undefined);
    const [loading, setLoading] = useState(false);
    const [previewImage, setPreviewImage] = useState<string | undefined>(defaultValues?.image);


    const form = useForm<FormValues>({
        resolver: zodResolver(validationSchema),
        defaultValues: defaultValues,
    });

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];

        if (file) {

            setSelectImage(file);
            setPreviewImage(URL.createObjectURL(file)); // Preview the selected image


        }
    };

    const handleSubmit: SubmitHandler<FormValues> = async (values: FieldValues) => {

        setLoading(true)
        if (selectImage) {


            const cloudinaryUpload = await uploadStagedFile(selectImage)
            if (!cloudinaryUpload.imgUrl) {
                return toast.error('Upload failed')
            }
            onSubmit({
                ...values,
                image: cloudinaryUpload.imgUrl,
                price: Number(values.price),
            });
        }

        setLoading(false)

    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4 pt-4">
                <CustomInput type="text" name="code" label="Product Code" placeholder="Write product code" control={form.control} />
                <CustomInput type="text" name="nameEn" label="Product Name(en)" placeholder="Write product English name" control={form.control} />
                <CustomInput type="text" name="nameAr" label="Product Name(ar)" placeholder="Write product Arabic name" control={form.control} />

                <div>
                    <label htmlFor="image" className="block text-sm font-medium leading-6 text-gray-900">Product Image</label>
                    {previewImage && (
                        <Image src={previewImage} alt="Product" className="h-32 w-32 object-cover mb-2" height={40} width={40} />
                    )}

                    <input type="file" name="image" id="image" onChange={handleFileChange} />
                </div>

                <CustomSelect
                    control={form.control}
                    name="category"
                    label="Category"
                    placeholder="Select product category"
                    options={categoryOptions}
                />

                <CustomSelect
                    control={form.control}
                    name="status"
                    label="Status"
                    placeholder="Select product status"
                    options={statusOptions}
                />

                <CustomInput type="number" name="price" label="Price" control={form.control} placeholder="Product price" />

                <Button disabled={loading} className="w-full" type="submit">
                    {loading && <Loader2 className="mr-2 size-4 animate-spin" />}
                    {id ? 'Save changes' : 'Add product'}
                </Button>
            </form>
        </Form>
    );
};

export default ProductForm;
