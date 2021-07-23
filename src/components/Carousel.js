import {
  Center,
  Flex,
  Image,
  Heading,
  Box,
  Stack,
  Text,
  Container,
} from "@chakra-ui/react";
import React from "react";

export default function Carousel() {
  return (
    <Box my="2rem">
      <Stack
        spacing={4}
        as={Container}
        maxW={"3xl"}
        textAlign={"center"}
        mb="1rem"
      >
        <Heading fontSize={"3xl"}>Proyectos</Heading>
        <Heading fontSize={"xl"}>Área de Producción</Heading>
        <Text color={"gray.600"} fontSize={"xl"}>
          <ul>
            <li>Consultoría y desarrollo de proyectos</li>
            <li>Planeación y ejecución de servicios.</li>
          </ul>
        </Text>
        <Heading fontSize={"xl"}>Área administrativa y operativa</Heading>
        <Text color={"gray.600"} fontSize={"xl"}>
          Elaboración de presupuestos y propuestas con sistemas de ingeniería
          alternativos con miras a mejorar la productividad de los recursos.
        </Text>
        <Heading fontSize={"xl"}>Gerencia de obra</Heading>
        <Text color={"gray.600"} fontSize={"xl"}>
          De ser necesario consolidación de Alianzas estratégicas con empresas
          constructoras especializadas para ejecución de obras nuevas,
          remodelaciones expansiones.
        </Text>
        <Heading fontSize={"xl"}>
          Se elaboran diseños y estudios hidráulicos e hidrológicos.
        </Heading>
      </Stack>

      <Center>
        <Flex className="carousel-image" w={["90vw", "60vw"]}>
          <Image
            src="https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
            alt="Segun Adebayo"
            boxSize="300px"
            mr="2rem"
          />
          <Image
            src="https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
            alt="Segun Adebayo"
            boxSize="300px"
            mr="2rem"
          />
          <Image
            src="https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
            alt="Segun Adebayo"
            boxSize="300px"
            mr="2rem"
          />
          <Image
            src="https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
            alt="Segun Adebayo"
            boxSize="300px"
            mr="2rem"
          />
          <Image
            src="https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
            alt="Segun Adebayo"
            boxSize="300px"
            mr="2rem"
          />
          <Image
            src="https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
            alt="Segun Adebayo"
            boxSize="300px"
            mr="2rem"
          />
          <Image
            src="https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
            alt="Segun Adebayo"
            boxSize="300px"
          />
        </Flex>
      </Center>
    </Box>
  );
}
