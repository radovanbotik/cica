import { createGlobalStyle } from "styled-components";
import bgnoise from "../assets/bg-noise.jpg";
import wall from "../assets/wall.jpg";
import crackedwall from "../assets/cracked-wall.jpg";
import poster3 from "../assets/poster3.jpg";

export const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }
    :root {

  
    --space: 1.62;

    --vspace: calc(var(--space) * 1rem);
    --vspace-0: calc(3 * var(--space) * 1rem);
    --vspace-1: calc(2 * var(--space) * 1rem);
    --vspace-2: calc(1.5 * var(--space) * 1rem);
    --vspace-3: calc(0.5 * var(--space) * 1rem);


    --bg:#2a2629;
    --bg-small:#121211;
    --text:#fad326;
    --buttons:#fffbf7;
    --accent:#f7dccf;

    /* --yellow: #ffde0f;
    --purple:#9fc836;
    --blue:#1f2133;
    --green:#dc88a6; */
    /* --pink:#d816b3; */
    /* --pink:#7f49dd; */
    /* --pink:#d155ae;
    --grey:#fad129; */

    --volkhov: 'Volkhov', serif;
    --nunito: 'Nunito Sans', sans-serif;
}

html {
    font-size: 16px;

}

body {
   
    font-size: 1em;
    max-width: calc(25 * var(--vspace-2));
    margin: 0 auto;
    font-family: 'Volkhov', serif;
    background-size:cover;
    color: var(--text);
    position: relative;
     background-image:linear-gradient(to left, #2a26291f, var(--bg)),
    url(${poster3}); 
    
    /* background-image:linear-gradient(to bottom, rgba(206, 206, 208, 0.62), #038ccc81), */
    

   }
  /* body::after{
    inset: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url(${bgnoise})} */

p {
    margin: var(--vspace) 0; 
    line-height: var(--vspace);
    
}

h1 {
    margin: var(--vspace-1) 0 var(--vspace-1) 0;
    line-height: calc(4.25/var(--space)* var(--vspace));
  font-family: var(--nunito);

}

h2 {
    margin: var(--vspace-2) 0 var(--vspace-3) 0;
    line-height: 1em;
  font-family: var(--nunito);

}

h3 {
    margin: var(--vspace-1) 0 var(--vspace-3) 0;
    line-height: 1em;
  font-family: var(--nunito);

}

h4, h5, h6 {
    margin: var(--vspace-2) 0 var(--vspace-3) 0;
    line-height: var(--vspace);
  font-family: var(--nunito);

}

.bigtitle, h1 {
    font-size: 4.25em;
    word-break: break-word;
}

.title, h2 {
    font-size: 2.3333em; 
    font-weight: lighter; 
    word-break: break-word;
}

.subheading1, h3 {
    font-size: 1.625em;
    font-weight: normal;
    text-transform: uppercase;
    letter-spacing: .1em;
}

blockquote {
    font-size: 1em;        
    font-style:italic; 
    line-height: calc(1*var(--vspace));
    margin: var(--vspace-2) var(--vspace-2);
}

.subheading2, h4 {
    font-size: 1.2917em;
    text-transform: capitalize;
}

.subheading3, h5 {
    font-size: 1.1458em; 
    font-weight: lighter; 
    text-transform: uppercase; 
    letter-spacing: .15em;
}

.subheading4, h6 {
    font-size: 1em;
    font-weight: normal;
    font-style: italic;
    font-family: "le-monde-livre-classic-byol",serif !important;
    letter-spacing: 0px!important;
}

.caption_ts {
    font-size: 0.7917em;
    font-weight: normal;
    font-style: italic;
}

.endnote_ts {font-size: 0.7917em;}

.footnote_ts {
  margin: var(--vspace-0) 0 var(--vspace-2) 0;
  font-size: 0.7083em;  
  border-top: 1px solid #ccc;
  line-height: 2em;
}

sup { 
    font-size: 0.7083rem;
    margin: .5em; 
    text-transform: none;
    font-style: italic;
    font-weight: normal;
}

section{
    padding: var(--vspace-3);
     margin: var(--vspace-3);

}

.material-symbols-outlined {
  font-variation-settings:
  'FILL' 0,
  'wght' 400,
  'GRAD' 0,
  'opsz' 48
}
`;
