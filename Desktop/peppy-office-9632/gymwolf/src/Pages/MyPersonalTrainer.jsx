import { Box, Button, Container, SimpleGrid } from '@chakra-ui/react'
import { Image,Text} from '@chakra-ui/react'
import { List,ListItem,ListIcon,} from '@chakra-ui/react'
  import{BiCheck} from "react-icons/bi"
import BAPT from '../Components/BAPT'
import LiftedGym from '../Components/LIFTED_USING_GYMWOLF'
import { ScrollButton } from '../Components/ScrollTop'


export default function MyPersonalTrainer(){
    return <div className="MPT">

        <div className="MPT-header">
            <h1>Online personal trainer</h1>
        </div>


        <div className="MPT-div2">
            <h1>Gymwolf has certified personal trainers that provide
                 you with customised workout plans depending on your goals. 
                 Our trainers track your progress, coach and motivate you daily through our
                  web and smartphone app.</h1>
                  <br />
                  <br />
                  <hr />
        </div>



        <div className="MPT-div3">
            <h1 className='Theading'>Our trainers</h1>
            <div className='Trainers'>
                <div className='Trainers1'>
                    <Image className='Timage' src="https://www.gymwolf.com/user_images/0db67d7bc0ced122b636098c6c7b6c9b_1530024726.jpg" alt="" />
                </div>
                <div className='Trainers2'>
                    <h1>Siim Savisaar</h1>
                    <p>Siim is a university-trained practising physiotherapist, 
                        personal trainer and a world-class bodybuilder. 
                        He’s a strong believer in what doesn’t challenge you, won’t 
                        change you. Thus, you should expect to be challenged if you work with him. 
                        Siim has extensive experience, from working 
                        with people with special needs to 
                        training elite athletes from freestyle skiing t
                        o bodybuilding and bikini fitness. 
                        His speciality is physical conditioning along with strength 
                        and hypertrophy programs.</p>
                        <Button className='Tbutton' colorScheme='blue'>Choose this trainer</Button>
                </div>
            </div>

            <div className='Trainers'>
                <div className='Trainers1'>
                    <Image className='Timage' src="https://www.gymwolf.com/user_images/a0e65be4dba72b3d37d0e490a8173d73_1596110163.jpg" alt="" />
                </div>
                <div className='Trainers2'>
                    <h1>Taavi Merisalu</h1>
                    <p>Taavi on lõpetanud Tartu Ülikooli sporditeaduste ja füsioteraapia instituudi. 
                        Tema spetsialiteet on 
                        raskejõustik, rahvasport ja personaaltreeningud. Enesetäiendamist ei 
                        ole ta lõpetanud - täiendab ennast pidevalt tänapäevaste uuringutega
                        , et hoida oma meetodid võimalikult teaduspõhised. Lisaks teiste treeni
                        misele treenib ta ka iseennast java on väga edukas kulturist Eestis. Mitmei
                        d kordi on saavutanud medalikohti Eesti sisevõistlustel ja ka välisvõistlust
                        el. Taavi treenitavate käes on üle 20 Eesti rekordi jõutõstmises. Lisaks reko
                        rditele on tema õpilased toonud Eestile 5 medalit Euroopa Meistrivõistlustelt.</p>
                        <Button className='Tbutton' colorScheme='blue'>Choose this trainer</Button>
                </div>
            </div>
            <div>

            </div>
        </div>

     <div className='MPT-div4'>
           <h1 className="Theading">How does it work?</h1>
           <div className='MPTquestions'>
            <h1>1</h1>
            <p>Choose the personal trainer that fits you the best and make the purchase.</p>
           </div>
           <div className='MPTquestions'>
            <h1>2</h1>
            <p>After the purchase your personal trainer will contact you through <b  style={{color:"rgb(54, 155, 189)"}}>Gymwolf</b>. Describe your goals and your trainer will then make you a customized workout plan.</p>
           </div>
           <div className='MPTquestions'>
            <h1>3</h1>
            <p>Achieve your goals by following the workout plan and tracking workouts in <b style={{color:"rgb(54, 155, 189)"}}>Gymwolf</b>. Personal trainer will keep an eye on your workouts, also giving feedback and motivation.</p>
           </div>

     </div>

     <div className='MPT-div5'>
        <h1>Pricing</h1>
        <div className='MPT-div5-1'>
            <h1>Choose your trainer, complete the purchase and they will help you achieve your fitness goals!</h1>
            <SimpleGrid className='MPTsimplegrid' columns={[1,2,3]}>
       

         <Container className='MPT-div5Box' >
         <div className='MPT-box1' >
                <Text className="Medal"><h1>BRONZE</h1></Text>
             </div>
             <Box  className='MPT-box2'>
                <Text className='usd'><p>USD</p> <h1>45</h1> <h2>/1 month</h2></Text>
                <Text className='saved'>You save 0 USD</Text>
             </Box>
             <Box  className='MPT-box3'>
             <List spacing={3}>
                            <ListItem>
                                <ListIcon as={BiCheck} color='gray.500' />
                                Personal workout plan
                            </ListItem>
                            <ListItem>
                                <ListIcon as={BiCheck} color='gray.500' />
                                Weekly progress reviews
                            </ListItem>
                            <ListItem>
                                <ListIcon as={BiCheck} color='gray.500' />
                                Chat with your trainer
                            </ListItem>
                            <ListItem>
                                <ListIcon as={BiCheck} color='gray.500' />
                                Gymwolf Pro features 
                            </  ListItem>
                            </List> 
             </Box>


             <Box className='MPT-box4' >
             <Button colorScheme='green' variant='outline'><ScrollButton/></Button>
             <Text style={{marginTop:"20px"}}>Only 45 USD per month</Text>
             </Box>
         </Container>
         

         <Container className='MPT-div5Box' >
             <div className='MPT-box1' >
                <Text className="Medal"><h1>GOLD</h1></Text>
             </div>
             <Box  className='MPT-box2'>
                <Text className='usd'><p>USD</p> <h1>115</h1> <h2>/3 month</h2></Text>
                <Text className='saved'>You save 20 USD</Text>
             </Box>
             <Box  className='MPT-box3'>
             <List spacing={3}>
                            <ListItem>
                                <ListIcon as={BiCheck} color='gray.500' />
                                Personal workout plan
                            </ListItem>
                            <ListItem>
                                <ListIcon as={BiCheck} color='gray.500' />
                                Monthly workout plan 
                            </ListItem>
                            <ListItem>
                                <ListIcon as={BiCheck} color='gray.500' />
                                Chat with your trainer
                            </ListItem>
                            <ListItem>
                                <ListIcon as={BiCheck} color='gray.500' />
                                Gymwolf Pro features 
                            </  ListItem>
                            </List> 
             </Box>


             <Box className='MPT-box4' >
             <Button colorScheme='green' variant='outline'><ScrollButton/></Button>
             <Text style={{marginTop:"20px"}}>Only 38.333333333333 USD per month</Text>
             </Box>
         </Container>


         <Container className='MPT-div5Box' >
         <div className='MPT-box1' >
                <Text className="Medal"><h1>PLATINUM</h1></Text>
             </div>
             <Box  className='MPT-box2'>
                <Text className='usd'><p>USD</p> <h1>216</h1> <h2>/6 month</h2></Text>
                <Text className='saved'>You save 54 USD</Text>
             </Box>
             <Box  className='MPT-box3'>
             <List spacing={3}>
                            <ListItem>
                                <ListIcon as={BiCheck} color='gray.500' />
                                Personal workout plan
                            </ListItem>
                            <ListItem>
                                <ListIcon as={BiCheck} color='gray.500' />
                                Monthly workout plan
                            </ListItem>
                            <ListItem>
                                <ListIcon as={BiCheck} color='gray.500' />
                                Chat with your trainer
                            </ListItem>
                            <ListItem>
                                <ListIcon as={BiCheck} color='gray.500' />
                                Gymwolf Pro features 
                            </  ListItem>
                            </List> 
             </Box>


             <Box className='MPT-box4' >
             <Button colorScheme='green' variant='outline'><ScrollButton/></Button>
             <Text style={{marginTop:"20px"}}>Only 36 USD per month</Text>
             </Box>
         </Container>
         </SimpleGrid>
        </div>
     </div>
        <BAPT/>
        <LiftedGym/>
    </div>
}



                           