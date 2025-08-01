

export const contactMessageCreate =async (userData)=>{
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

export const reservetablePostCreate= async (userReservData)=>{
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