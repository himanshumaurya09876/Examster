import React ,{useState} from 'react';
import Header from './Header';
import Footer from './Footer';
import Carousel from 'react-material-ui-carousel'
import {Paper , Avatar} from '@material-ui/core'

import './Home.css';

function Home() {
    var items = [
        {
            img : "../Images/Card1.jpg"
        },
        {
            img : "../Images/Card2.jpg"
        },
        {
            img : "../Images/Card3.jpg"
        }
    ];
    const img_style = { height: '50%', width: '50%' , margin : 'auto' };
    
    return (
        <div className="home">
            <Header />
            <div className="home__slider">
                    <Carousel  navButtonsAlwaysVisible="true" animation="slide">
                        {
                            items.map( (item, i) => {
                                return (  
                                    <Paper>
                                        <div className="home__slides">
                                            <img src={item.img} className="home__slider__img" />
                                        </div>
                                    </Paper>
                                )
                            })
                        }
                    </Carousel>
            </div>


            <div className='home__reviews'>
                <div className="review__item">
                    <div className="review__img">
                        <Avatar
                            style={img_style}
                            src="data:image/jpeg;base64,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"
                            alt="Name"        
                        />
                    </div>
                     <div className="review__text">
                        <p > Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                     </div>
                </div> 
                <div className="review__item">
                    <div className="review__img">
                        <Avatar
                            style={img_style}
                             src="data:image/jpeg;base64,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"
                            alt="Name"        
                        />
                    </div>
                     <div className="review__text">
                        <p > Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                     </div>
                </div> 
                <div className="review__item">
                    <div className="review__img">
                        <Avatar
                            style={img_style}
                            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQEhUREBAVFRUVGBUWFxcVFRUVFRUVFRUXFxcWFRcYHSggGBolHRcXITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQFy0dHx0tLS0rLSstLSstLS0tLy0tLS0tLi0uLS0tLS0tKy0tKy0tLSstLS0tLS0tLS0rLS0tK//AABEIAOEA4QMBIgACEQEDEQH/xAAcAAAABwEBAAAAAAAAAAAAAAAAAQIDBAUHBgj/xABBEAABAwEFBAcFBQcEAwEAAAABAAIDEQQFEiExBkFRgQcTImFxkbEyQqHB8BRSctHhIzNigqKywjRjkvFTs+Ik/8QAGQEAAwEBAQAAAAAAAAAAAAAAAAECAwQF/8QAIhEBAQACAwADAAIDAAAAAAAAAAECEQMhMRJBUTKhEyJC/9oADAMBAAIRAxEAPwDVqI6I0EjBBGggCQSkEAVEVEpBAJQojRIAqLntpNpYrJG5+JrnNIGGuZNaUVft3tY2yN6uNw6w60d2gK6aGhPesWvO85LQ9znk93hXT4oOR1l99JNolAZCDHmalpzPAdw48e5Uz9tbwLDH15FcsWslODXageCom0bmdT9ElMSvLsgfLLzO5I1/ZdtrfDk21SU4OIf8XglXVl6WLY2mJsbh4HPnVZ2Yx3nw/VJwdxRoN+2a6R7NaqNlHVP8atPhw8F2cUjXgOY4OadCDUFeU48tCR4LudjNs5bLIMcrnRkgPa/OorQurStQPHRBabtRFRN2S1RzMEkTw9jtHNNQU6mRNEVEpBAIREJRRJAghJIThSSgzZCQQnSkEIBFEEpBAWaNBBMgQQQQAQRoIAkEaJABcft9tULHHgjcOueMt5a3e5dLettbBE+V5o1jS4nuAqad/wCa8/7Q2qSWeSWc9onMA1DeDf5dOSVqsZtEtdokmJc9xcTqXO+aYiiaDV5qN9Bmo7pydFPu+6ZrQaNCm3TSTZE9jbK/9m4UNcjlTPIZ8s0xbLlkiyc2np+q7u6thnCjpH8v1XRP2eaWYDnTMHeOKy/yyNP8VrG8JApSnmkGKu7yzWlWzY0HSvmuft+yc0ebTy0VTmlK8Nji5IQOKJjiN5Vha2FhLZWlp4qI+PgtNsvi7LYPbJ9ikwucXQuIxMNOz/E3vHDet0gmbI1r2ODmuAc0jQg5gryqW0NRkfVbj0R3111m6h57UemXu9x36g8ynEWO9RJSJMiSkpZSUgSURCUiKDNkJJCcKSUAhBKoggLFBHRBMhII6IJgSCNBAEggggnIdJNpLLLQb3sr3gOxU8wFhd52ipJJ3nmd5Ws9L9royKOtMRcT4DL4f5LFbZIXyU3BRfWs6jpNlrq694JFR9eS1q6bpaxooAFQdHV04YQ4jM5ruom0XJyZbydfHNQmOCgThhyT4ojSkO1FdZxRQLXZxTRXFFCtTaoynR43twd/bPxzA9mh4hZle9gfZX0Ps7j+a3G0xarits7uD2E03JcXJZdUcvHLNxnQeHLt+im1vjtYaM2upi1prh/yWfR5EtPJdRsLeHUWyEk0DnsY7wLxSvgQF2eOK9x6ORFGiVsxJKWklAEklKKIpAgpJSyiKDIRo0SAsEEaCohIIIIAIIIIIERRoigMa6ZJ/wD9EbeEY+L3k/2rOLosLppWMGZe4eVf+yu46X5cVue37scbebs/mmOimwiW0ySUyY0U5kj0Cyyupa2xm9RqV12dtniAOQaAkSX9Z2e088mk+isBYw81fmBo3dXieKKawWc+1Gz/AIiq5pHVtGst+wPNA417wR6q2bI06KkdBE13ZaKKzs5yySmX0rLE9LI1oqVUWy+rM00dKAVItpxChVULkgkdV7RRFy30Jjrsh96Wd+bZQd2SrL2jD25UIKuJ9nLK3NrOYJVXa7A5lerzbrhOo8FGWK8axnaGxmGZwpQE1Cagfo7zpr4rstv7uDo+tAzbT4rhLJJu4+q6+PL5Y7cXJj8ctPT+yN5farJDKTV2HC48XN7JPOleauFn/Q1bMdkfGdWP+Dh/8rQFtGFEiKUkoAkSMokgSURSkRQZKJKRICegggqIESNEggQQQQARI0RQGE9J9nLrZM8Z1ewDL/aAOfcWkeNeCuuh6xYBOSN7B8HLqdoLna9ocW1JxB3GtXFrh36j+ZR+j6zhrJKfeHwBXPyZf8urix3PkvbwjncMMLwwn3iMRA/hByr41XKX1s3antIbb5Q6pNXOk300Ebmj+neV3mBRrRd7H5n1Kxm5433PK4q47FPFRks/WChBLi4uxbiKjTdQ/ou0sMVG0KRFd0TDUNFeOqfeKZBLXe6eV31Ffa21dkucvCz2qVzgyZrBQBlHUNa5l/ZNB3D9FfAkudU78vCm/nVTW2ON2rQUpN1VuppxNnui8ohV14iQ7miJhb4EkVop9llnd2ZY8JpmR7J7wDmF1f2KNgqAq21jgEs5fv8Ao8Na6/txe2dlrZZQBmBX5/JY42F2IADUhbvtDGDDJUe6Qs+uewMa5znCoaKnuAzNFpxZ/HGseTj+eUdf0NSuZJPA7KgxEb6gtB+XmVqy4Po6sBLpbU4UMr5Tyc5tB/Qu7XXHFl6NEUaJMhIkZRIAkkpSIpAlBGgg01BBBUkEEEEASCCCACSUaIoCDaWajiT6KJd9maxzyPeDa8Mq6ean2kLg9iL6mfa7VZZHVZEC6MEdoDrCCK7xm3wWPLj9/jfhy1ufrvxSii2i0BgJSZp6KpkeZnU0aNeJ7gufLPXjrww33Uyx2l8tXN0GimlmWarZrCcJEb3Mrrhy/wClEfPLE3AcUg3Entc+Pip3r1Wpl4kOaa5apVhvEYix2RHkVSvdbHHEHNYPu0r5p+z2Y5ueavOdRuppRRMr9NPjNdulklBGSqrbokw2wjI6+qj2ueqdz2WOOlRfrS+JzRqaDzK5raGzx2KyP0rJhjB3uLva8m4jyV5tLekdkh62UEtDm5NpUknICpWX7UbRyW57CW4I2VwMrU5jNzjx9FfFhcrPxjyckxl/W+7Fx4bJH/EMX/LMK+C57YabHYbM7/aYOYaAfRdAu2OC+jQQQTISIo0SAJEjRJASCNBBpqJGgqSJBBBAEggiQASSjKSUAzaNFi9wXmIL5q40bKZISdwL6Fn9TGjmtjt8oYxzjuB9F5qv2YmVzwSCSXAjUGpIIKnKb6Xj129GvFQqq3iWFhMEYkeCSGudhDstMVDRV2wW1TbwgBcR18YDZW9+54H3XUr3Go3LqSyua4csdV3Y5dOSuHaC1W5smGNsMkTsL4nVc4aAGpAqDWoKnSMtrQSY2uoaGopQ+eak3hd4DutjcY35dpuRyIdQ8RUaFIF72xrcOGGTMdrFgJ0rVtKblWo3xmWt4yX+lZabVbYz+0gb7OLKpy5BVVs2lwStgdC/rXmgayjuBJPACuqub3va1SAj9nCHAtJa7rH65FpoAPIpq6rE0PdMW1kf7TyBjdkAKncMtBkosk+1ZTL47yxkTLNG8tq8ZnchM2gUzGGhU97XiyNjnPcAGgkk6ABY1McL0q20FkMP3nl58GCnq74LgpRkOfyT9/XsbXaHSn2fZYODBpzOvNMzaNXp8WPxxkeby5fLK2Nt6G7y6yyOhJzicafhf2h8cS0ELA+iq+fs1sDXGjZRgPiT2T5rewqjOlIIkaZAiKNEgCRFGiSAIIIINNQQQVJEgggUwJEUaJAEUgpRTUhogKDbO19XZpD3eq8+Xk6rvP0Ws9J96dlsTT7RNeXyWP2x1STy88lH20nUS9jLbLBboHROLSXtY7g5jiA5rhw/RekbLMHZLzHcpItMFN8sfljC9HNaaBzdVz8/sbcPlWU8FQqW0XYCdFbxW2oo7I/WiJ0rdVjZjXRhllj4oxdLQa09U/gDNdykWm3NHBc7eN5l1Q1ZXU8a7yy9OXhbw0E1WZ9Itte6NgJIBfpXWgOvFdq6IuzK4TpFZ+7HefRPg75Inn64646IeisQKind8lCiHopY0C9N5gQvdG5r26tIPkvSGyd7ttdmZIDnSh8QvOzWA5HetE6Ib2wOfZ3HfUd+4/LzSP2NgQSWmqUmkEESCACJGiSAIIIINORI0FSRIkaJMCRFGkucgEuKoNo77js0Zc51KcNSeA709f18x2djnuIy+qnuWK7SbQOtLsbj2BXA3TEeKm1WMQ9or1fPIZHe07QDRrdwC5+0D3VJc73jm4/XkosjCakbtT8keK9TNl4estsA4Oxcmgr0ZYx2QsQ6ObsJn61w0yC3KyNyXLyXeTfCaxGYgVAttm4VHNWRBUe0jJY5Tprje3NWqzk71GbZlcSxZptsSw+Lo+SF1FAuA6QYRWMnTFQnhUarTZI1yO1lhxtzFaFbcX+uUrHk/wBsbGdWi6nMGPUZEkaEHLEFHwZc6Lv9kbhLnSQOJdG9poDnhqD7J5aLjrXY3RPkifqw0P8AKaei9GdzccHl1UUZUKt9nLb9ntcUm4kB3gcj9dyqJshzTtatrvbny0PqiiPSljkqKqUua2Nt/X2SKWtThAd4jsn4iq6NpRE0pBBEgAiRokgCCJBBrBBGiVpEiKUiKAQSqy+ryhs0TppnUa0bzqdwA3lTbRIQsI22v2S3WhwDiYo3FrBo0kZFx8vJK9Hj3S9ob8dbnOklcWQt9ljd/CvwXIWmbEa6AaDgFIt9oJo2taaUFAqt/aOEfXFTGl/D0DS80G/fwG8rrrNs5SzdYW+25rGV1NTUu8gVN6PtlevcJJARGNe/g0fNd9fsLS6KMAUbiNNwyACM+sdlh3lpT7OXYIgKBdvZHZKnsUFKK5jbRcenVafaQa9ybliqltcg4ooiulgCb6sBTZAotodQKNL2hSiqqbys+LJXTGE5qHaGZpyFaLYywtbI87wAB3Vqua6VbgwSNtbG5O7ElOPuuPjp5LtNm4QJnu4tApzVtf8AdTbVBJC732kA8DuPI0K7+LvBw8t1ybeZ7SMiOHyRRyZU4inn/wBp684XRvfG8Ue0lrhwc00PooLXZfD4oNrHQ/erTDLA51CHAtrwcM/iCtNidoeK8+bA3gIrSGONBJ2a8CdPyW02B0jWgV3DL6+s05E5XtfoKNZ7TiGeqkVSAIkaJICQQRINZokaNoqrSSm3midCSVWkWue2re9tlmfmMLH0ANMyKCp/JYdfDPs4bCDUtFXU+8aZLbtvpxHYpSeDad5LhQea8/3hI573EmriSXHvOqnJph5tBlfv3nL81abKXQ60TtGEkVBPgNBzNBzKqnipotH6MJ7PE/DM8ML82ucQG5aAk5A5miUPKtQui7m2aJsYGQGZ796rb0sxEgk1FMPhQ1rzr8Ffde11Wsex/GjgaA78swmbZBVlOGY5I5Md4p4s9ZK2xq0jIUOGNqlNiC43bZC8KaKUQWoNcCp0fhvASolqZ2qKxyTToCTVGlGmwgBQrTCrEt4pJYFSQuCGmJ3eByA/VW75ANf0TWFsLAXZAAlx0Gmayfaba2e1ubGwGOAOGIA1dIK6uO4dy7sJ8cZHn55fLK1z/S0yL7cJYiCJWdqmhew4C4HeDkPFpXDM3hXm3NpDrY9rfZhDIW00o0Vd/UXKirQ1U1pj4n7PMJnDN5xAdztWnzC9C3a8OjjdxY0+YBXnvZxx69pHtVbTxxtH5r0JdkeGJjfutDeQ+vgninNLMehCcbKW66JYGiS9qekbSAaoFRIJKGh3qSVFaSjRIqo0jWicYMk2nRoriKQBkkEJYSSqQzTpat+UUDc3E48PE1wRjzJP8qyW8rP1TjGDUt1O/Fv+K0Hb1z3W/rPdY4NFdD1TWn+6T4LPrykq9znGpcS4+aitcfEKMdoBd1cVyddHUarhLJm8/X1qto2LgH2eM+CrDupz6hrZqySWKQPw5EYXAb2k5076gHktJDmvYCM94VN9lDgpt3Vb2SrrJUS1je5vA5eBzClQT1Ui+bLX9oNRkfBVkdQuHkx+OT0ePL5YrcGqTgTUDlJClW9EBqKRyccmX5paGzLnJ674i94J0bmfl9dybbESaBSrfL1MYYz23ZfmVrxYbu/xly56mp7XObZXg6Z32aM9ge2R7x3N8FUR3JGyMkjcVdQ2MYi4pjaGYRQPcdzXHyBIC7J+uK/jz/eLy6WVztXPcT4lxKYJyCObfXikbvJYuhYXHMGWhjj7Ic0u8MQK9HWN7S0OaciKjwIXm27oq9qu+n19bluew1u6yARk1LAAPwkVHlpyTicp061m5B6KM+ibc/KqpmiTOzU9j6gFVUrtSp1kd2BzUWrxSKoJNUElLhOlNBOlaRFIBz8UgmhSn8UiTNNDK9sYsQ6w7pLYT4Bwp/aFklrdU8vRbBti3DDJ/C+c/wDJ1P8AILHnjMnhkoraeE2Edvwott2EcDZm8/gaH0WJ2HJx5eq1vo4tFYy37rq8iKH4qsPU5+NGhapLWJiDRSmKmQ5GVGfPwVFJDhJHBdIAqi846OCy5ZvHf424ctZa/UaI0UtpUNqkxlczqpwpOFHVHRBJNijAq87voqrkcZHOkOmjfBWNvOFjYxq7X5qJI2jQF14zUkcmWW7ajiNcn0g2jDZnj72Fo5mp/t+K7IjJZ30myGjW8GueeWQ+JV29Ix9Y7aNTzTY3BOTjP65pIFVk3TbpdR4B94UWsbBvwln8TS08xib8Q/zWQwuwuB4EHyWr7Kvw4HN0y5UeQPg4IK+NHjdkUw52QCNj+zySIDWhV1kYtQpQdyk2A9nmokzqlx5eSfu92R8VnVxMRIqo0KXYKdcmKpwuWkZ0Tk3Ga5cMkbymoXjF4/X5JpcJ0iMwxzintAO0+8WD/FYjNofH0ovQPSJZS6AvbuBa7w9r4FqwW1R0rz+Si+tcfDEIpn3rRuje0UkLdzxTms9gGIuZvIqPGlVebJXiYpGHeCPhx9OaJezs3G/2J1W+CmNVXd0wcA5ujgD9easmlaMElhUe8oMTO8ZhOMcnTolZvpUuu3MY0uOUorYzC8jn5pMa4rNXTul3NpbXp+PMgcSExGpEBoa8ASnjN3ScrqbHO7FITwyCbm1ARQ8eOfmlHVdbiJkCy/pHmr1xrmGwsH8xc9w8g1ai/RY10hzEPe0/+QE8oWgepTy8PD1n8rRSv1qU1AK181Ps9jdMcAGjS4qLGKO8x5rNqEYz8louxk/ZDScxUeRr6Cqz6Marq9kbUGyeJ+JaQ2nmfIIo+mvtf2ORRiejSeAVfNaA1uvcgx+KjeZ+Se2aRIaMA3lP3c7J3JQp34nUGjR8VIu52R8VF9VFjiQTOJGhS/TkuiCC0jOmxookX7xBBUlX7X/6WTn/AGlefLeggovrXD+KNYv3zfw/IKVZvbP4j6oIJKbzst/p4/wt9F0DUEFq5zrE8EEEgoL6/eDw+ajMQQXJyfyrt4/4xKiT3uu8EaCOP+Rcv8aOJGgguqOSidp9d6xTpG/fv/Ef/WxBBGXisPVXsT/qXfgHqFzp9vmPUIIKfpf2RHr9d6v9m/bb+OP+5qCCnI40y2bvEeoVhYdXcvQI0EYs6RF73i71Uy7/AGT4oIJKiUggghT/2Q=="
                            alt="Name"        
                        />
                    </div>
                     <div className="review__text">
                        <p > Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                     </div>
                </div>         
            </div>        

            
            <div className="home__features">
                <div className="home__featureContainer">
                    <div className="home__featureImg">
                        <img className="feature__img"src="Images/Card1.jpg"/>
                    </div>
                    <div className="home__featureText">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem</p>
                    </div>
                </div>
                <div className="home__featureContainer">
                    <div className="home__featureText">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem</p>
                    </div>
                    <div className="home__featureImg">
                        <img className="feature__img"src="Images/Card1.jpg"/>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home