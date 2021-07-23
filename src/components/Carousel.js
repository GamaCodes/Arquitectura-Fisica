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
            src="/one.png"
            alt="proyectos dise;o y arquitectura"
            boxSize="300px"
            mr="2rem"
          />
          <Image
            src="/two.png"
            alt="proyectos dise;o y arquitectura"
            boxSize="300px"
            mr="2rem"
          />
          <Image
            src="/tree.png"
            alt="proyectos dise;o y arquitectura"
            boxSize="300px"
            mr="2rem"
          />
          <Image
            src="/four.png"
            alt="proyectos dise;o y arquitectura"
            boxSize="300px"
            mr="2rem"
          />
          <Image
            src="/five.png"
            alt="proyectos dise;o y arquitectura"
            boxSize="300px"
            mr="2rem"
          />
          <Image
            src="/six.png"
            alt="proyectos dise;o y arquitectura"
            boxSize="300px"
            mr="2rem"
          />
          <Image
            src="/seven.png"
            alt="proyectos dise;o y arquitectura"
            boxSize="300px"
            mr="2rem"
          />
          <Image
            src="/eigth.png"
            alt="proyectos dise;o y arquitectura"
            boxSize="300px"
            mr="2rem"
          />
          <Image
            src="/nine.png"
            alt="proyectos dise;o y arquitectura"
            boxSize="300px"
            mr="2rem"
          />
          <Image
            src="/ten.png"
            alt="proyectos dise;o y arquitectura"
            boxSize="300px"
          />
        </Flex>
      </Center>
    </Box>
  );
}
