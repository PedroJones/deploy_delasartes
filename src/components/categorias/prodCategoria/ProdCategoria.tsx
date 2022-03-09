import { Box, Card, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import Categorias from '../../../models/Categorias';
import { buscaId } from '../../../services/Service';
import Navbar from '../../estaticos/navbar/Navbar';


const ProdCategoria = () => {
  const [categoria, setCategoria] = useState<Categorias>(
    {
      id: 0,
      genero: '',
      descricao: '',
      produto: []
    })

  const foto = categoria.descricao;
  var produtos = categoria.produto;

  const { id } = useParams<{ id: string }>();
  let history = useHistory();


  async function findByIdCategoria(id: string) {
    await buscaId(`categorias/${id}`, setCategoria, {

    })
  }

  console.log(categoria)
  console.log(produtos)
  console.log(foto)
  useEffect(() => {
    window.scrollTo(0, 0)
    if (id !== undefined) {
      findByIdCategoria(id)
    }
    
  }, [id])


  return (
    <>
      <h1 className='prodtitulo'>OBRAS</h1>
      <Box className='display'>
      {
          produtos?.map(post => (
            
            <Box m={2} >
              <Link to={`/produto/${post.id}`} className="text-decorator-none">
              <Card className='cardbackground displaycard'>
                <img className='cardmedia' src={post.foto} alt="" />
                <div className='displaytext font'>
                  <Typography  >
                    <h1>{post.nome}</h1>
                  </Typography>
                  <Typography  >
                    <p> R&#36; {post.valor.toFixed(2)}</p>
                  </Typography>
                  <Typography  >
                    <p className='pgp'>{post.descricao}</p>
                  </Typography>

                </div>

              </Card>
              
              </Link>
            

            </Box>
          ))
        }
        
        
        
        </Box>

       
      
      <Navbar/>
    </>
  )
}

export default ProdCategoria

