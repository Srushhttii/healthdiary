import { Box, Button, Card, CardBody, Grid, GridItem, Heading, Image, Stack, Text } from '@chakra-ui/react'
import { React, useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css';

const VeganDiet = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: false
        })
    }, [])

    return (
        <Grid templateColumns="repeat(6,1fr)" bg="white">
            <GridItem
                data-aos="fade-right"
                className='hidden'
                as="main"
                colSpan={{ base: 6, lg: 6, xl: 6 }}
                p={{ base: "0rem", md: "3rem", xl: "3rem" }}
            >
                <Box maxW='64rem'>
                    <Heading mb={4} fontSize='3.5rem'>Vegan Diet Features</Heading>
                    <br />
                    <Text fontSize='xl'>
                        The articles below discuss Nutrition, Weight Control, Diabetes and provide valuable tips for losing weight healthily.
                    </Text>

                </Box>
            </GridItem>

            {/* the side heading of the tabel */}
            <GridItem
                data-aos="fade-right"
                className='hidden'
                as="main"
                colSpan={{ base: 6, lg: 6, xl: 6 }}
                p={{ base: "0rem", md: "3rem", xl: "3rem" }}
            >
                <br />
                <br />
                <Box maxW='64rem'>
                    <Heading mb={4} fontSize='3rem'> Getting Started</Heading>

                </Box>
            </GridItem>

            {/*first three cards  */}
            <GridItem
                className='hidden'
                data-aos="fade-up"
                as="main"
                colSpan={{ base: 6, lg: 6, xl: 3 }}
                p={{ base: "1rem", md: "1rem 3rem 1rem 11rem", xl: "3rem" }}
            >
                <Box maxW='64rem'>
                    <Card maxW='sm'
                        bg="white"
                        borderTop="8px"
                        borderColor="purple.400"
                    >
                        <CardBody>
                            <Image
                                src=""
                                alt='Green double couch with wooden legs'
                                borderRadius='lg'
                            />
                            <Stack mt='6' spacing='3'>
                                <Heading size='md'>Start a vegan diet? Follow these steps to get maximum benefits</Heading>
                                <Text>
                                    It is essential to have a roadmap for a healthy and balanced vegan plan.
                                </Text>
                                <Button size='md' colorScheme='purple' mt='24px'
                                >
                                    Read More !
                                </Button>
                            </Stack>
                        </CardBody>

                    </Card>

                </Box>
            </GridItem>
            <GridItem
                className='hidden'
                data-aos="fade-up"
                as="main"
                colSpan={{ base: 6, lg: 6, xl: 3 }}
                p={{ base: "1rem", md: "1rem 3rem 1rem 11rem", xl: "3rem" }}
            >
                <Box maxW='64rem'>
                    <Card maxW='sm'
                        bg="white"
                        borderTop="8px"
                        borderColor="purple.400"
                    >
                        <CardBody>
                            <Image
                                src=""
                                alt='Green double couch with wooden legs'
                                borderRadius='lg'
                            />
                            <Stack mt='6' spacing='3'>
                                <Heading size='md'>6 Essential nutrients for vegans</Heading>
                                <Text>
                                    Thinking about a vegan diet? Here are the six most important nutrients for vegan and the supplements you might need .
                                </Text>
                                <Button size='md' colorScheme='purple' mt='24px'
                                >
                                    Read More!
                                </Button>
                            </Stack>
                        </CardBody>

                    </Card>

                </Box>
            </GridItem>
            <GridItem
                className='hidden'
                data-aos="fade-up"
                as="main"
                colSpan={{ base: 6, lg: 6, xl: 3 }}
                p={{ base: "1rem", md: "1rem 3rem 1rem 11rem", xl: "3rem" }}
            >
                <Box maxW='64rem'>
                    <Card maxW='sm'
                        bg="white"
                        borderTop="8px"
                        borderColor="purple.400"
                    >
                        <CardBody>
                            <Image
                                src=""
                                alt='Green double couch with wooden legs'
                                borderRadius='lg'
                            />
                            <Stack mt='6' spacing='3'>
                                <Heading size='md'>Do vegan diets give you enough protein </Heading>
                                <Text>
                                    Here are our favorite plant based proof sources that will fill and fuel you.
                                </Text>
                                <Button size='md' colorScheme='purple' mt='24px'
                                >
                                    Read More!
                                </Button>
                            </Stack>
                        </CardBody>

                    </Card>

                </Box>
            </GridItem>
            <GridItem
                className='hidden'
                data-aos="fade-up"
                as="main"
                colSpan={{ base: 6, lg: 6, xl: 3 }}
                p={{ base: "1rem", md: "1rem 3rem 1rem 11rem", xl: "3rem" }}
            >
                <Box maxW='64rem'>
                    <Card maxW='sm'
                        bg="white"
                        borderTop="8px"
                        borderColor="purple.400"
                    >
                        <CardBody>
                            <Image
                                src=""
                                alt='Green double couch with wooden legs'
                                borderRadius='lg'
                            />
                            <Stack mt='6' spacing='3'>
                                <Heading size='md'>Curious how to use tofu in more tasty ways? Check out these 5 meal ideas!</Heading>
                                <Text>
                                    Tofu is versatile, nutritious and adapts well to many different kind of recipes.

                                </Text>
                                <Button size='md' colorScheme='purple' mt='24px'
                                >
                                    Read More!
                                </Button>
                            </Stack>
                        </CardBody>

                    </Card>

                </Box>
            </GridItem>


        </Grid>
    )
}

export default VeganDiet