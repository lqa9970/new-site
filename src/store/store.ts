import { create } from "zustand";
import { Image } from "../types";

//images
import reactImg2 from "../images/react-1-logo-svg-vector.svg";
import vueImg from "../images/vue3.png";
import angularImg from "../images/angular.png";
import tsImg from "../images/Ts.png";
import awsImg from "../images/aws.png";
import nodeImg from "../images/node3.jpg";
import pythonImg from "../images/python3.png";
import restImg from "../images/rest.png";
import dbImg from "../images/database.jpg";
import dotImg from "../images/dot.png";

import cvhubAdmin from "../images/adminpage.png";
import cvPreview from "../images/cvpreview.png";
import editcv from "../images/editcv.png";
import cvhome from "../images/cvhome.png";
import searchPage from "../images/searchpage.png";
import staffPage from "../images/staffpage.png";

import dof1 from "../images/createenv.png";
import dof2 from "../images/createpro.png";
import dof3 from "../images/createsand.png";
import dof4 from "../images/env.png";
import dof5 from "../images//home.png";
import dof6 from "../images/sandbox.png";

import cracker1 from "../images/crackerCoin.png";
import cracker2 from "../images/crackerDark.png";
import cracker3 from "../images/crackerHome.png";
import cracker4 from "../images/crackerTheme.png";

import ecommerce1 from "../images/signin.png";
import ecommerce2 from "../images/cart.png";

type ImageState = {
  images: Image[];
};

export const useImageStore = create<ImageState>((set, get) => ({
  images: [
    { id: 1, title: "React", img: reactImg2 },
    { id: 2, title: "TypeScript", img: tsImg },
    { id: 3, title: "Vue", img: vueImg },
    { id: 4, title: "Angular", img: angularImg },
    { id: 5, title: "AWS", img: awsImg },
    { id: 6, title: "Node.js", img: nodeImg },
    { id: 7, title: "Python", img: pythonImg },
    { id: 8, title: "REST API", img: restImg },
    { id: 9, title: "SQL/noSQL", img: dbImg },
    { id: 10, title: "Other techs...", img: dotImg },
  ],
  getAllImages: () => get().images,
}));

export const useCVHubStore = create<ImageState>((set, get) => ({
  images: [
    { id: 1, title: "Home page", img: cvhome },
    { id: 2, title: "CV Preview", img: cvPreview },
    { id: 3, title: "Editing page", img: editcv },
    { id: 4, title: "Admin page", img: cvhubAdmin },
    { id: 5, title: "Search tool", img: searchPage },
    { id: 6, title: "CV page", img: staffPage },
  ],
  getAllImages: () => get().images,
}));

export const useDOFStore = create<ImageState>((set, get) => ({
  images: [
    { id: 1, title: "Home page", img: dof1 },
    { id: 2, title: "CV Preview", img: dof2 },
    { id: 3, title: "Editing page", img: dof3 },
    { id: 4, title: "Admin page", img: dof4 },
    { id: 5, title: "Search tool", img: dof5 },
    { id: 6, title: "CV page", img: dof6 },
  ],
  getAllImages: () => get().images,
}));

export const useCrackerStore = create<ImageState>((set, get) => ({
  images: [
    { id: 1, title: "Home page", img: cracker1 },
    { id: 2, title: "CV Preview", img: cracker2 },
    { id: 3, title: "Editing page", img: cracker3 },
    { id: 4, title: "Admin page", img: cracker4 },
  ],
  getAllImages: () => get().images,
}));

export const useEcomStore = create<ImageState>((set, get) => ({
  images: [
    { id: 1, title: "Home page", img: ecommerce1 },
    { id: 2, title: "CV Preview", img: ecommerce2 },
  ],
  getAllImages: () => get().images,
}));
