import { ChartColumn, Home, NotepadText, Package, PackagePlus, Settings, ShoppingBag, UserCheck, UserPen, UserPlus, Users } from "lucide-react";

import ProfileImage from "@/assets/profile-image.jpg";
import ProductImage from "@/assets/product-image.jpg";
import { label, title } from "framer-motion/client";

export const navbarLinks = {
    ADMIN: [
        {
            title: "Dashboard",
            links: [
                { label: "Dashboard", icon: Home, path: "/" }
            ]
        },
        
        {
            title: "Customer Register",
            links: [
                { label: "Customer Book", icon: UserPen, path: "/Customer" },
               
            ]
        },
        {
            title: "Booking",
            links: [
                { label: "Vehicle Booking", icon: UserPen, path: "/RentBooking" },
               
            ]
        },
        {
            title: "Tax",
            links: [
                { label: "Tax", icon: UserPen, path: "/tax" },
               
            ]
        },
        {
            title:"Vehical Register",
            links:[
                {
                    label:"Vehical", icon:UserPen, path:"/Vehical",
                }
            ]
        },
        {
            title:"Manage Rent package",
            links:[
                {
                    label:"plan", icon:UserPen, path:"/plan",
                },
                {
                    label:"DistanceRange", icon:UserPen, path:"/DistanceRange",
                },
                {
                    label:"PlanPrice", icon:UserPen, path:"/PlanPrice"
                }
            ]
        },
        {
            title:"Manage Employee",
            links:[
                {
                    label:"Staff", icon:UserPen, path:"/Employee",
                },
                {
                    label:"Driver", icon:UserPen, path:"/Driver",
                }
            ]
        },
       
        {
            title: "Settings",
            links: [
                { label: "Settings", icon: Settings, path: "/settings" }
            ]
        }

    ],
    DRIVER: [
        {
            title: "Dashboard",
            links: [
                { label: "Dashboard", icon: Home, path: "/Dashboard" }
            ]
        },
        {
            title: "Schedule Delivery",
            links: [
                { label: "Book", icon: ShoppingBag, path: "/Book" }
              
            ]
        },
        {
            title: "Report",
            links: [
                { label: "Product Report", icon: Package, path: "/product-report" }
            ]
        },
        {
            title: "Settings",
            links: [
                { label: "Settings", icon: Settings, path: "/settings" }
            ]
        }
    ]
};


export const overviewData = [
    {
        name: "Jan",
        total: 1500,
    },
    {
        name: "Feb",
        total: 2000,
    },
    {
        name: "Mar",
        total: 1000,
    },
    {
        name: "Apr",
        total: 5000,
    },
    {
        name: "May",
        total: 2000,
    },
    {
        name: "Jun",
        total: 5900,
    },
    {
        name: "Jul",
        total: 2000,
    },
    {
        name: "Aug",
        total: 5500,
    },
    {
        name: "Sep",
        total: 2000,
    },
    {
        name: "Oct",
        total: 4000,
    },
    {
        name: "Nov",
        total: 1500,
    },
    {
        name: "Dec",
        total: 2500,
    },
];

export const recentSalesData = [
    {
        id: 1,
        name: "Olivia Martin",
        email: "olivia.martin@email.com",
        Destination: "",
        image: ProfileImage,
        total: 1500,
    },
    {
        id: 2,
        name: "James Smith",
        email: "james.smith@email.com",
        image: ProfileImage,
        total: 2000,
    },
    {
        id: 3,
        name: "Sophia Brown",
        email: "sophia.brown@email.com",
        image: ProfileImage,
        total: 4000,
    },
    {
        id: 4,
        name: "Noah Wilson",
        email: "noah.wilson@email.com",
        image: ProfileImage,
        total: 3000,
    },
    {
        id: 5,
        name: "Emma Jones",
        email: "emma.jones@email.com",
        image: ProfileImage,
        total: 2500,
    },
    {
        id: 6,
        name: "William Taylor",
        email: "william.taylor@email.com",
        image: ProfileImage,
        total: 4500,
    },
    {
        id: 7,
        name: "Isabella Johnson",
        email: "isabella.johnson@email.com",
        image: ProfileImage,
        total: 5300,
    },
];

export const topProducts = [
    {
        number: 1,
        postalArea: "Downtown",
        modeOfDelivery: "Courier",
        toDate: "2024-12-25",
        toTime: "10:00 AM",
        fromDate: "2024-12-24",
        fromTime: "3:00 PM",
    },
    {
        number: 2,
        postalArea: "Uptown",
        modeOfDelivery: "Pickup",
        toDate: "2024-12-26",
        toTime: "2:00 PM",
        fromDate: "2024-12-25",
        fromTime: "9:00 AM",
    },
    {
        number: 3,
        postalArea: "Midtown",
        modeOfDelivery: "Drone",
        toDate: "2024-12-27",
        toTime: "6:00 PM",
        fromDate: "2024-12-26",
        fromTime: "12:00 PM",
    },
    {
        number: 4,
        postalArea: "Suburb",
        modeOfDelivery: "Courier",
        toDate: "2024-12-28",
        toTime: "8:00 AM",
        fromDate: "2024-12-27",
        fromTime: "5:00 PM",
    },
    {
        number: 5,
        postalArea: "City Center",
        modeOfDelivery: "Courier",
        toDate: "2024-12-29",
        toTime: "11:00 AM",
        fromDate: "2024-12-28",
        fromTime: "4:00 PM",
    },
    {
        number: 1,
        postalArea: "Downtown",
        modeOfDelivery: "Courier",
        toDate: "2024-12-25",
        toTime: "10:00 AM",
        fromDate: "2024-12-24",
        fromTime: "3:00 PM",
    },
    {
        number: 2,
        postalArea: "Uptown",
        modeOfDelivery: "Pickup",
        toDate: "2024-12-26",
        toTime: "2:00 PM",
        fromDate: "2024-12-25",
        fromTime: "9:00 AM",
    },
    {
        number: 3,
        postalArea: "Midtown",
        modeOfDelivery: "Drone",
        toDate: "2024-12-27",
        toTime: "6:00 PM",
        fromDate: "2024-12-26",
        fromTime: "12:00 PM",
    },
    {
        number: 4,
        postalArea: "Suburb",
        modeOfDelivery: "Courier",
        toDate: "2024-12-28",
        toTime: "8:00 AM",
        fromDate: "2024-12-27",
        fromTime: "5:00 PM",
    },
    {
        number: 5,
        postalArea: "City Center",
        modeOfDelivery: "Courier",
        toDate: "2024-12-29",
        toTime: "11:00 AM",
        fromDate: "2024-12-28",
        fromTime: "4:00 PM",
    },
];


export const deliveryProducts = [
    {
        number: 1,
        name: "Wireless Headphones",
        image: ProductImage,
        description: "High-quality noise-canceling wireless headphones.",
        price: 99.99,
        status: "collected",
        rating: 4.5,
        Destination: "12,Wolfstreet,canada"
        
    },
    {
        number: 2,
        name: "Smartphone",
        image: ProductImage,
        description: "Latest 5G smartphone with excellent camera features.",
        price: 799.99,
        status: "In Transit",
        rating: 4.7,
         Destination: "12,Wolfstreet,canada"
    },
    {
        number: 3,
        name: "Gaming Laptop",
        image: ProductImage,
        description: "Powerful gaming laptop with high-end graphics.",
        price: 1299.99,
        status: "Out For Delivery",
        rating: 4.8,
         Destination: "12,Wolfstreet,canada"
    },
    {
        number: 4,
        name: "Smartwatch",
        image: ProductImage,
        description: "Stylish smartwatch with fitness tracking features.",
        price: 199.99,
        status: "Delivered",
        rating: 4.4,
         Destination: "12,Wolfstreet,canada"
    },
    {
        number: 5,
        name: "Bluetooth Speaker",
        image: ProductImage,
        description: "Portable Bluetooth speaker with deep bass sound.",
        price: 59.99,
        status: "canceled",
        rating: 4.3,
         Destination: "12,Wolfstreet,canada"
    },
    {
        number: 6,
        name: "4K Monitor",
        image: ProductImage,
        description: "Ultra HD 4K monitor with stunning color accuracy.",
        price: 399.99,
        status: "In Transit",
        rating: 4.6,
         Destination: "12,Wolfstreet,canada"
    },
    {
        number: 7,
        name: "Mechanical Keyboard",
        image: ProductImage,
        description: "Mechanical keyboard with customizable RGB lighting.",
        price: 89.99,
        status: "In Transit",
        rating: 4.7,
         Destination: "12,Wolfstreet,canada"
    },
    {
        number: 8,
        name: "Wireless Mouse",
        image: ProductImage,
        description: "Ergonomic wireless mouse with precision tracking.",
        price: 49.99,
        status: "In Transit",
        rating: 4.5,
         Destination: "12,Wolfstreet,canada"
    },
    {
        number: 9,
        name: "Action Camera",
        image: ProductImage,
        description: "Waterproof action camera with 4K video recording.",
        price: 249.99,
        status: "In Transit",
        rating: 4.8,
         Destination: "12,Wolfstreet,canada"
    },
    {
        number: 10,
        name: "External Hard Drive",
        image: ProductImage,
        description: "Portable 2TB external hard drive for data storage.",
        price: 79.99,
        status: "In Transit",
        rating: 4.5,
         Destination: "12,Wolfstreet,canada"
    },
];
