import React from "react";
import { useHistory } from "react-router-dom";
import { Button, Box } from "@chakra-ui/react";
import { Heading, Text, Image, Flex, Link } from "@chakra-ui/react";

function HealthIssues() {
  const history = useHistory();

  const handleChatButtonClick = () => {
    history.push("/home");
  };

  return (
    <Box className="text-gray-600 body-font">
      <Box maxW="1800px" mx="auto">
        {/* Header */}
        <Box as="header" textAlign="center" py={8} mb={8}>
          <Heading
            as="h1"
            fontSize="3xl"
            fontWeight="bold"
            color="black"
            mb={4}
          >
            MENTAL HEALTH SUPPORT
          </Heading>
        </Box>
      </Box>
      <Box maxW="7xl" mx="auto" p={10}>
        <Box textAlign="center" mb={20} bg="green.200" rounded="lg" p={5}>
          <h1
            fontSize={{ base: "2xl", sm: "3xl" }}
            fontWeight="medium"
            mb={4}
            color="gray.900"
            py={5}
          >
            “Your mental health is just as important as your physical health.”
          </h1>
          <Button onClick={handleChatButtonClick} colorScheme="yellow">
            Start Chat
          </Button>
        </Box>
        <Box display="flex" flexWrap="wrap">
          <Box
            flexBasis={{ base: "100%", md: "50%", xl: "25%" }}
            p={6}
            borderLeft="2px"
            borderColor="gray.200"
            bg="blue.200"
            rounded="lg"
            opacity="0.9"
            mb={4}
          >
            <h2
              fontSize={{ base: "lg", sm: "xl" }}
              fontWeight="medium"
              mb={2}
              color="gray.900"
            >
              Depression
            </h2>
            <p fontSize="sm" lineHeight="tall" color="gray.900">
              What is depression basically? Depression is a mood disorder that
              causes a persistent feeling of sadness and loss of interest. It
              affects how you feel, think, and handle daily activities. Symptoms
              can vary and can include sadness, loss of interest, fatigue,
              changes in appetite, and more.
            </p>
          </Box>

          <Box
            flexBasis={{ base: "100%", md: "50%", xl: "25%" }}
            p={6}
            borderLeft="2px"
            borderColor="gray.200"
            bg="blue.200"
            rounded="lg"
            opacity="0.9"
            mb={4}
          >
            <h2
              fontSize={{ base: "lg", sm: "xl" }}
              fontWeight="medium"
              mb={2}
              color="gray.900"
            >
              Anxiety Disorder
            </h2>
            <p fontSize="sm" lineHeight="tall" color="gray.900">
              Anxiety disorders are characterized by intense, excessive, and
              persistent worry and fear about everyday situations. They can
              interfere significantly with daily activities, work, school, and
              relationships. Symptoms may include rapid heart rate, sweating,
              trembling, feelings of impending doom, and more.
            </p>
          </Box>

          <Box
            flexBasis={{ base: "100%", md: "50%", xl: "25%" }}
            p={6}
            borderLeft="2px"
            borderColor="gray.200"
            bg="blue.200"
            rounded="lg"
            opacity="0.9"
            mb={4}
          >
            <h2
              fontSize={{ base: "lg", sm: "xl" }}
              fontWeight="medium"
              mb={2}
              color="gray.900"
            >
              Stress
            </h2>
            <p fontSize="sm" lineHeight="tall" color="gray.900">
              Stress is your body's reaction to a challenge or demand. It can
              come from any event or thought that makes you feel frustrated,
              angry, or nervous. While stress is a normal part of life,
              excessive stress can lead to physical and mental health problems.
              Symptoms may include headaches, insomnia, fatigue, and more.
            </p>
          </Box>

          <Box
            flexBasis={{ base: "100%", md: "50%", xl: "25%" }}
            p={6}
            borderLeft="2px"
            borderColor="gray.200"
            bg="blue.200"
            rounded="lg"
            opacity="0.9"
            mb={4}
          >
            <h2
              fontSize={{ base: "lg", sm: "xl" }}
              fontWeight="medium"
              mb={2}
              color="gray.900"
            >
              Post-Traumatic Stress Disorder
            </h2>
            <p fontSize="sm" lineHeight="tall" color="gray.900">
              PTSD is a mental health condition triggered by a terrifying event.
              Symptoms may include flashbacks, nightmares, severe anxiety, and
              uncontrollable thoughts about the event. It can affect anyone who
              has experienced a traumatic event, and treatment often involves
              therapy and medication.
            </p>
          </Box>
          {/* Add more Box components for additional health issues */}
        </Box>
      </Box>
      <Flex flexDirection={{ base: "column", lg: "row" }} p={4} gap={8} mb={8}>
        {/* Left Column */}
        <Box flex="1">
          {/* First Card */}
          <Box
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            boxShadow="md"
            bg={"white"}
          >
            <Image
              src="https://www.priorygroup.com/media/597888/self_care_types_and_examples-min.jpg"
              alt="Nature"
            />
            <Box p={4}>
              <Heading as="h2" fontSize="xl" mb={4} fontWeight="bold">
                Some methods to cure mental illness.
              </Heading>
              <Text fontSize="lg">
                <strong>Seek Professional Help:</strong> If you or someone you
                know is experiencing mental health challenges, it's essential to
                consult with a mental health professional.
                {/* Add more content */}
              </Text>
            </Box>
          </Box>

          {/* Second Card */}
          <Box
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            boxShadow="md"
            bg={"white"}
            mt={8}
          >
            <Image
              src="https://yourmentalhealthpal.com/wp-content/uploads/2023/02/Mental-health-self-care-activities.png"
              alt="Norway"
            />
            <Box p={4}>
              <Heading as="h2" fontSize="xl" mb={4} fontWeight="bold">
                Awareness
              </Heading>
              <Text fontSize="lg">
                Helps You Understand Your Mental Health Symptoms.
                {/* Add more content */}
              </Text>
            </Box>
          </Box>
        </Box>

        {/* Right Column */}
        <Box flex="1">
          {/* Third Card */}
          <Box
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            boxShadow="md"
            bg={"white"}
          >
            <Image
              src="https://www.drishtiias.com/images/uploads/1636458620_image6.jpg"
              alt="India Mental Health Stats 2023"
            />
            <Box p={4}>
              <Heading as="h2" fontSize="xl" mb={4} fontWeight="bold">
                Mental Health Statistics in India 2023
              </Heading>
              <Text fontSize="lg">
                Depressive symptoms grew from a base of about 193 million people
                worldwide to 246 million, which is about 28%.
                {/* Add more content */}
              </Text>
            </Box>
          </Box>

          {/* Slogans */}
          <Box
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            boxShadow="md"
            bg={"white"}
            mt={8}
          >
            <Box p={4}>
              <Heading as="h2" fontSize="xl" mb={4} fontWeight="bold">
                Popular Slogans
              </Heading>
              <Text fontSize="lg">
                <Text mb={4}>
                  <strong>
                    "Your Mental Health Is a Precious Asset. Invest in
                    Self-Care."
                  </strong>
                  <br />
                  Invest in self-care because your mental health matters.
                </Text>
                <Text mb={4}>
                  <strong>
                    "Mental Health Is a Journey, Not a Destination; Let's Travel
                    It Together."
                  </strong>
                  <br />
                  Let's support each other on the mental health journey.
                </Text>
                <Text mb={4}>
                  <strong>
                    "The Sun Will Shine Again, Even on Your Darkest Days. Hold
                    On."
                  </strong>
                  <br />
                  Even during tough times, there's hope for brighter days.
                </Text>
                <Text>
                  <strong>
                    "Let's Rewrite the Story of Mental Health in 2023:
                    Compassion, Understanding, and Hope."
                  </strong>
                  <br />
                  Promoting compassion, understanding, and hope for mental
                  health.
                </Text>
              </Text>
            </Box>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}

export default HealthIssues;
