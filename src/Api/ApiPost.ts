export interface ContactMessage {
  name: string;
  email: string;
  phoneNumber: string;
  message: string;
}

export interface ReservationData {
  name: string;
  numberOfGuests: number;
  reservationDate: string;  // e.g., "2025-08-01"
  reservationTime: string;  // e.g., "9:00 PM"
}

export const contactMessageCreate =async (userData:ContactMessage)=>{
    const res=await fetch('https://landingpage-backend-fovb.onrender.com/api/v1/contact',{
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
    const res =await fetch('https://landingpage-backend-fovb.onrender.com/api/v1/reservation',{
        method:'POST',
        body:JSON.stringify(userReservData),
        headers:{
            'Content-Type':'application/json',
        },
    })
    const userdata= await res.json()

    return userdata;
}