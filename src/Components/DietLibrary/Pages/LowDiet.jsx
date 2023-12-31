import { Box, Button, Card, CardBody, Grid, GridItem, Heading, Image, Stack, Text } from '@chakra-ui/react'
import { React, useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css';


const LowDiet = () => {
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
          <Heading mb={4} fontSize='3.5rem'>Low Diet Features</Heading>
          <br />
          <Text fontSize='xl'>
            The articles below will help you be successful with your low-carb plan, learn about nutrition, and gain valuable tips for using MyNetDiary.          </Text>

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
                <Heading size='md'>Starting Low-Carb Diet : 5 Steps for Success</Heading>
                <Text>
                  Whether you are starting a low carb diet for weight loss or blood sugar level. Follow these 5 steps to maximize your success.                </Text>
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
                <Heading size='md'>10 Staples to turn your pantry healthy source for a low carb lifestyle</Heading>
                <Text>
                  You won't regret putting these tasty Staples in your shopping cart                </Text>
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
                <Heading size='md'>Low Carb Food Grade</Heading>
                <Text>
                  Need help finding healthy low carb foods? This might help you !                </Text>
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
                <Heading size='md'>Are you missing out on these important vitamins and minerals if you are following a low carb diet</Heading>
                <Text>
                  Learn how to customize you targets and track more than 50000 nutrients with My fitness .                </Text>
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

export default LowDiet