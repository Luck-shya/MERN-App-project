import React from "react";
import { useHistory } from "react-router-dom";
import { Button, Box } from "@chakra-ui/react";

function HealthIssues() {
  const history = useHistory();

  const handleChatButtonClick = () => {
    history.push("/home");
  };

  return (
    <Box className="text-gray-600 body-font">
      <Box className="container px-5 py-24 mx-auto">
        <Box className="flex flex-col text-center w-full mb-20 bg-green-200 rounded-lg p-5">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 py-5">
            “Your mental health is just as important as your physical health.”
          </h1>
          <Button onClick={handleChatButtonClick} colorScheme="yellow">
            Go to Home
          </Button>
        </Box>
        <Box className="flex flex-wrap">
          <Box className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60 bg-blue-200 rounded-lg opacity-90">
            <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
              Depression
            </h2>
            <p className="leading-relaxed text-base mb-4">
              What is depression basically? Depression is a mood disorder that
              causes a persistent feeling of sadness and loss of interest. Also
              called major depressive disorder or clinical depression, it
              affects how you feel, think and behave and can lead to a variety
              of emotional and physical problems.
            </p>
          </Box>

          <Box className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60 bg-blue-200 rounded-lg opacity-90">
            <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
              Anxiety Disorder
            </h2>
            <p className="leading-relaxed text-base mb-4">
              A mental health disorder characterized by feelings of worry,
              anxiety or fear that are strong enough to interfere with one's
              daily activities. Examples of anxiety disorders include panic
              attacks, obsessive-compulsive disorder and post-traumatic stress
              disorder.
            </p>
          </Box>

          <Box className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60 bg-blue-200 rounded-lg opacity-90">
            <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
              Stress
            </h2>
            <p className="leading-relaxed text-base mb-4">
              Stress can be defined as a state of worry or mental tension caused
              by a difficult situation. Stress is a natural human response that
              prompts us to address challenges and threats in our lives.
              Everyone experiences stress to some degree.
            </p>
          </Box>

          <Box className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60 bg-blue-200 rounded-lg opacity-90">
            <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
              Post-Traumatic Stress Disorder
            </h2>
            <p className="leading-relaxed text-base mb-4">
              Post-traumatic stress disorder (PTSD) is a disorder that develops
              in some people who have experienced a shocking, scary, or
              dangerous event. It is natural to feel afraid during and after a
              traumatic situation.
            </p>
          </Box>

          {/* You can add more Box components for additional health issues */}
        </Box>
      </Box>
    </Box>
  );
}

export default HealthIssues;
