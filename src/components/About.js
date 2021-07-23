import React from "react";

import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";

export default function SplitWithImage() {
  return (
    <>
      <Container maxW={"5xl"} py={12} id="section1">
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Stack spacing={4}>
            <Text
              textTransform={"uppercase"}
              color={"blue.400"}
              fontWeight={600}
              fontSize={"sm"}
              bg={useColorModeValue("blue.50", "blue.900")}
              p={4}
              alignSelf={"flex-start"}
              rounded={"md"}
            >
              Acerca
            </Text>
            <Heading>DISEÑO Y ARQUITECTURA FISICA DEL SURESTE</Heading>
            <Text color={"gray.500"} fontSize={"lg"}>
              Es una empresa dedicada al ramo de la construcción ofreciendo sus
              servicios especializados en obras de infraestructuras tales como
              carreteras, sistemas de drenajes pluviales, sanitarios,
              movimientos de tierra, construcción de acueductos, puentes,
              pavimentación de hormigón y asfalto. Productos de nuestra
              experiencia ofrecemos los servicios de diseño planeación y
              construcción, administración y operación de proyectos de todas
              aquellas personas, grupos o instituciones que involucran dichos
              campos de atención y servicio.
            </Text>
          </Stack>
          <Flex>
            <Image
              rounded={"md"}
              alt={"feature image"}
              src={
                "https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              }
              objectFit={"cover"}
            />
          </Flex>
        </SimpleGrid>
      </Container>
      <Container maxW={"5xl"} py={12}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Flex>
            <Image
              rounded={"md"}
              alt={"feature image"}
              src={
                "https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              }
              objectFit={"cover"}
            />
          </Flex>
          <Stack spacing={4}>
            <Text
              textTransform={"uppercase"}
              color={"blue.400"}
              fontWeight={600}
              fontSize={"sm"}
              bg={useColorModeValue("blue.50", "blue.900")}
              p={4}
              alignSelf={"flex-start"}
              rounded={"md"}
            >
              Acerca
            </Text>
            <Text color={"gray.500"} fontSize={"lg"}>
              DISEÑO Y ARQUITECTURA FISICA DEL SURESTE, ofrece el apoyo de un
              grupo de profesionales con amplia experiencia y nivel de formación
              académica en diversas disciplinas, cuyo desempeño en
              organizaciones del sector Público y Privado avala
              satisfactoriamente su sólida experiencia. De igual forma,
              garantiza el adecuado manejo y control de asuntos confidenciales;
              lo que aunado a su integración como empresa del sector
              construcción, permite generar una suma de efectos útiles a manera
              de valor agregado en las tareas que desempeña. Por su calidad y
              precio DISEÑO Y ARQUITECTURA FISICA DEL SURESTE, se rige como una
              de las empresas con la mayor posibilidad de generar ventajas
              competitivas para sus clientes. Todos nuestros proyectos tienen la
              cobertura de empresas aseguradoras reconocidas a nivel nacional e
              internacional.
            </Text>
          </Stack>
        </SimpleGrid>
      </Container>
    </>
  );
}
