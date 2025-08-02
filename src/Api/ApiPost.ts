export interface ContactMessage {
  name: string;
  email: string;
  phoneNumber: string;
  message: string;
}

export interface ReservationData {
  name: string;
  numberOfGuests: number;
  reservationDate: string;  
  reservationTime: string;  
}

export const contactMessageCreate =async (userData:ContactMessage)=>{
    const res=await fetch(`${process.env.NEXT_PUBLIC_API_URL}/contact`,{
        method: 'POST',
        body:JSON.stringify(userData),
        headers:{
            'Content-Type':'application/json',
        },

        
    })
    const user= await res.json();
    return user;
}

export const reservetablePostCreate= async (userReservData:ReservationData)=>{
    const res =await fetch(`${process.env.NEXT_PUBLIC_API_URL}/reservation`,{
        method:'POST',
        body:JSON.stringify(userReservData),
        headers:{
            'Content-Type':'application/json',
        },
    })
    const userdata= await res.json()

    return userdata;
}