import styled from "@emotion/styled";

export const Container = styled.div({
  height: "70vh",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
  gridAutoRows: "150px",
  gridTemplateRows: "masonry",
  gridAutoFlow: "row dense",
  gap: "6px",
  alignItems: "center",
  overflowY: "scroll",
  padding: "10px 3em",
  marginTop: "30px",
  "::-webkit-scrollbar": {
    display: "none",
  },
});

/*Home page*/
export const Title = styled.h1({
  fontSize: "1.5em",
  marginTop: "20px",
  paddingLeft: "2em",
  color: "#FFF",
});
/*Home page*/

/*Details page*/
export const ContentGif = styled.div({
  padding: '10px',
  marginTop: '20px',
  height: '78vh',
  overflowY: 'scroll',
  "::-webkit-scrollbar": {
    display: "none",
  },
});
export const GIM = styled.img({
  width: '100%'
});
export const GTITLE = styled.p({
  color: '#FFF',
  marginTop: '10px',
  textTransform: 'uppercase'
});
export const AddF = styled.button({
  background: 'transparent',
  color: '#FFF',
  outline: 'none',
  cursor: 'pointer',
  border: 'none'
});

export const Ley = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '30px',
  padding: '0px 5px'
});
/*Details page*/


/*Favorite page*/
export const Grap = styled.div({
  marginBottom: ".5em",
  position: "relative",
  height: "100%",
  color: "#000",
  display: "block",
  width: "100%",
  ":nth-of-type(11n + 1)": {
    gridColumn: "span 2",
    gridRow: "span 2",
  },
  ":nth-of-type(8n + 1)": {
    gridColumn: "span 2",
    gridRow: "span 2",
  },
  ":nth-of-type(10n + 1)": {
    gridColumn: "span 2",
    gridRow: "span 1",
  },
  ':hover': {
    div: {
      opacity: 1
    }
  }
});

export const GifFav = styled.img({
  width: "100%",
  verticalAlign: "top",
  height: "inherit",
  objectFit: "cover",
});

export const Action = styled.div({
  position: 'absolute',
  top: '0px',
  left: '0px',
  width: '100%',
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  padding: '3px 5px',
  height: '100%',
  background: 'rgba(0, 0, 0, 0.777)',
  opacity: '0'
}) 

export const BTN = styled.button({
  cursor: 'pointer',
  background: 'none',
  border: 'none',
  color: '#942BE5'
})

export const NotFavs = styled.h1({
  color: '#FFF'
})
/*Favorite page*/