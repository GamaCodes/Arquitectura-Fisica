import React from "react";

import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  HStack,
  VStack,
} from "@chakra-ui/react";

import { AiFillCheckCircle } from "react-icons/ai";

// Replace test data with your own
const features = [
  {
    id: 0,
    text:
      "Proyecto pavimentación e infraestructura del Puerto de Manzanillo en la provincia de Colón",
  },
  {
    id: 1,
    text:
      "Colocación y remoción de sobrecargas para consolidación de suelos MIT.",
  },
  {
    id: 2,
    text: "Diseño de obras de retención de suelos.",
  },
  {
    id: 3,
    text: "Construcción de muros de tierra mecánicamente estabilizada.",
  },
  {
    id: 4,
    text:
      "Estabilización de suelos por medio de geotextiles y geomallas Plantaciones Arroz Calesa.",
  },
  {
    id: 5,
    text: "Pavimentación con sistemas de hormigón y carpetas asfálticas.",
  },
  {
    id: 6,
    text:
      "Construcción de sistemas de drenaje pluvial superficiales y subterráneos Unión FENOSA Albrook.",
  },
  {
    id: 7,
    text: "Construcción de sistemas de alcantarillado sanitario.",
  },
  {
    id: 8,
    text: "Demoliciones y movimientos de tierra.",
  },
  {
    id: 9,
    text: "Administración de proyectos de construcción e inspección de obras.",
  },
  {
    id: 10,
    text: "Levantamientos topográficos.",
  },
];

export default function GridListWithHeading() {
  return (
    <Box p={4}>
      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <Heading fontSize={"3xl"}>Experiencia</Heading>
        <Text color={"gray.600"} fontSize={"xl"}>
          En nuestra trayectoria hemos realizado desde proyectos de gran visión
          tanto del sector público como privado. Estos son algunos de los más
          importantes.
        </Text>
      </Stack>

      <Container maxW={"6xl"} mt={10}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
          {features.map((feature) => (
            <HStack key={feature.id} align={"top"}>
              <Box color={"green.400"} px={2}>
                <Icon as={AiFillCheckCircle} />
              </Box>
              <VStack align={"start"}>
                <Text color={"gray.600"}>{feature.text}</Text>
              </VStack>
            </HStack>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
