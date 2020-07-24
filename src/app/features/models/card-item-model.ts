export interface CardItemModel {
    id: string;
    titleGroup: {
        cardTitle: string;
        cardSubtitle:string;
        img:string;
    },
    imgSrc : {
        src: string;
        alt: string;
    },
    cardContent: {
        textContent: string;
        htmlContent: any
    },
    class: string;
    avatarClass: string;
}
