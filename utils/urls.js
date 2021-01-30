export const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://next-yousha.herokuapp.com"

export const MAGIC_PUBLIC_KEY = process.env.NEXT_PUBLIC_MAGIC_PUBLIC_KEY || 'pk_test_7837604C820F0E9C'

export const STRIPE_PK = process.env.NEXT_PUBLIC_STRIPE_PK || 'pk_test_ldsMjawYsGcUsdNYL88Fdpb000QVC4TXUM'

/**
 * Given a image object return the proper path to display it
 * Provides a default as well
 * @param {any} image 
 */
export const fromImageToUrl = (image) => {
    if (!image) {
      return "/vercel.svg"; //Or default image here
    }
    if (image.url.indexOf("/") === 0) {
      //It's a relative url, add API URL
      return `${API_URL}${image.url}`;
    }
  
    return image.url;
};