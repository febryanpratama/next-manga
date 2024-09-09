"use client"
import { usePackage } from "@/src/app/(front)/package/PackageContext";
import { checkValue } from "@/src/repository/auth/authRepository";
import { getDataPaymentChannel } from "@/src/repository/payment/paymentRepository"
import { useEffect, useState } from "react"


const useCheckoutService = () => {
    const { selectedPackage } = usePackage();
    const  [listPaymentChannel, setlistPaymentChannel] = useState<any>([])
    const [email, setEmail] = useState<string>('');
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [passwordConfirmation, setPasswordConfirmation] = useState<string>('');
    const [paymentMethod, setPaymentMethod] = useState<string>('');
    const [packageId, setPackageId] = useState<number>();
    const [isCombine, setIsCombine] = useState<boolean>(false);
    const [isMatch, setIsMatch] = useState<boolean>(false);

    const [checkEmail, setCheckEmail] = useState<boolean>(false);
    const [checkUsername, setCheckUsername] = useState<boolean>(false);

    const getPaymentChannel = async () => {
        const resp = await getDataPaymentChannel();
        setlistPaymentChannel(resp.data);
    }

    const funcCheckEmail = async () => {

        if(email.length > 2){

            const resp = await checkValue('email', email);
    
            if (!resp?.result.status) {
                setCheckEmail(true);
            }else{
                setCheckEmail(false);
            }

        } else {
            setCheckEmail(false);
        }

    }

    const funcCheckUsername = async () => {

        if(username.length > 2){
            const resp = await checkValue('username', username);
    
            if (!resp?.result.status) {
                setCheckUsername(true);
            }else{
                setCheckUsername(false);
            }

        } else {
            setCheckUsername(false);
        }

    }

    const submit = () => {
        
        const data = {
            email,
            username,
            password,
            passwordConfirmation,
            paymentMethod,
            packageId,
        }

        console.log(data);

        // Hit API Transaction
    }

    useEffect(() => {
        getPaymentChannel();
        setPackageId(selectedPackage?.id);
    }, []);

    console.log(listPaymentChannel);

    return {
        listPaymentChannel,
        email,
        setEmail,
        username,
        setUsername,
        password,
        setPassword,
        passwordConfirmation,
        setPasswordConfirmation,
        paymentMethod,
        setPaymentMethod,
        packageId,
        setPackageId,
        isCombine,
        setIsCombine,
        isMatch,
        setIsMatch,
        checkEmail,
        checkUsername,
        submit,
        funcCheckEmail,
        funcCheckUsername
    }
}

export default useCheckoutService;