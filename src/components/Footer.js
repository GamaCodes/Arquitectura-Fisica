import React from "react";

import {
  Box,
  Container,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

export default function SmallCentered() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        spacing={4}
        justify={"center"}
        align={"center"}
      >
        <svg
          width="276"
          height="66"
          viewBox="0 0 276 66"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M46.6783 5.63956H24.0556L15.0676 28.0062H38.225L46.6783 5.63956Z"
            fill="#666"
          />
          <path
            d="M0 65.5028H24.056L33.2173 41.2588L2.84933 58.4161L0 65.5028Z"
            fill="#666"
          />
          <path
            d="M36.2669 39.5366L30.1855 55.3073L62.5495 42.15L48.4509 7.94198L40.7122 28.0073H56.6762L36.2669 39.5366Z"
            fill="#666"
          />
          <path
            d="M11.1472 30.2593L0.468567 57.174L48.1086 30.2593H11.1472Z"
            fill="#666"
          />
          <path
            d="M43.7734 52.2372L63.1708 44.4278L71.2628 65.5025H49.2708L43.7734 52.2372Z"
            fill="#666"
          />
          <path
            d="M83.0468 20.7288H86.5935C90.5122 20.7288 92.0642 17.6181 91.9895 14.5621C91.9162 11.6394 90.3402 8.71543 86.5935 8.71543H83.0468V20.7288ZM95.2175 14.5888C95.2922 19.3341 92.6295 24.1341 86.5935 24.1341H79.8188V5.36476H86.5935C92.5082 5.36476 95.1428 9.95009 95.2175 14.5888"
            fill="#666"
          />
          <path
            d="M97.6578 5.36438H100.886V24.135H97.6578V5.36438Z"
            fill="#666"
          />
          <path
            d="M115.075 9.89543C114.485 8.82343 112.858 7.80476 110.986 7.80476C108.571 7.80476 107.414 8.90343 107.414 10.2981C107.414 11.9341 109.187 12.3901 111.258 12.6581C114.854 13.1408 118.206 14.1594 118.206 18.6381C118.206 22.8208 114.805 24.6168 110.961 24.6168C107.438 24.6168 104.727 23.4368 103.446 20.0048L106.158 18.4768C106.921 20.5408 108.917 21.4528 111.01 21.4528C113.055 21.4528 114.978 20.6754 114.978 18.6381C114.978 16.8674 113.277 16.1434 110.986 15.8754C107.463 15.4194 104.211 14.4008 104.211 10.1901C104.211 6.33009 107.71 4.74743 110.887 4.72076C113.573 4.72076 116.357 5.55143 117.662 8.44743L115.075 9.89543Z"
            fill="#666"
          />
          <path
            d="M133.579 24.1344H120.669V5.3637H133.579V8.79704H123.897V13.113H133.234V16.4117H123.897V20.649H133.579V24.1344Z"
            fill="#666"
          />
          <path
            d="M140.159 2.38755C140.749 0.804888 141.711 -0.320445 143.337 0.0822213C144.495 0.376888 145.629 1.77156 146.392 0.108889L148.363 1.12756C147.648 3.19289 146.416 3.80889 145.259 3.48755C144.052 3.11155 142.992 1.52889 142.031 3.48755L140.159 2.38755ZM147.944 5.33689H151.196V24.1342H149.176V24.1609L140.109 11.4782V24.1342H136.856V5.36356H139.493L147.944 17.0009V5.33689Z"
            fill="#666"
          />
          <path
            d="M157.53 14.937C157.605 18.021 159.131 21.3184 163.197 21.3184C167.263 21.3184 168.79 17.993 168.839 14.9104C168.889 11.745 167.263 8.20636 163.197 8.20636C159.131 8.20636 157.457 11.773 157.53 14.937ZM172.042 14.8557C171.994 19.7104 169.258 24.5637 163.197 24.5637C157.137 24.5637 154.329 19.817 154.329 14.8824C154.329 9.94902 157.234 4.98903 163.197 4.98903C169.135 4.98903 172.091 9.94902 172.042 14.8557"
            fill="#666"
          />
          <path
            d="M182.784 18.4494C182.784 20.4334 184.584 21.2121 186.381 21.2121C187.539 21.2121 189.979 20.5414 189.979 18.6374V15.9294H186.235C183.844 15.9294 182.784 17.3228 182.784 18.4494ZM193.059 18.6641C193.059 19.7628 193.501 20.7014 194.611 20.7014V24.2148C193.329 24.2148 191.901 23.8934 191.359 21.7481C190.225 23.7588 188.255 24.3761 186.431 24.3761C182.661 24.3761 179.607 23.0614 179.583 18.4228C179.583 16.8401 180.641 15.0974 182.243 14.5081C180.691 13.9721 179.927 12.1748 179.927 10.7001C179.951 6.7041 183.424 5.06943 186.505 5.06943C189.511 5.06943 192.788 6.32943 192.812 10.3788H189.732C189.732 8.66277 188.18 8.0721 186.431 8.0721C183.893 8.0721 183.056 9.6001 183.081 10.7001C183.081 12.6041 185.249 13.1401 186.407 13.1401H194.487V15.9294H193.059V18.6641Z"
            fill="#666"
          />
          <path
            d="M87.7773 34.9944L84.5746 42.9864H90.9786L87.7773 34.9944ZM92.2853 46.2837H83.2679L81.7906 49.8237H78.2666L86.0026 31.053H89.5506L97.2866 49.8237H93.7399L92.2853 46.2837Z"
            fill="#666"
          />
          <path
            d="M102.018 34.3512V40.3565H106.97C109.041 40.3565 109.927 38.8552 109.927 37.3538C109.927 35.8525 109.015 34.3512 106.97 34.3512H102.018ZM114.042 49.8232H110.173L105.147 43.5485H102.018V49.8232H98.7661V31.0258C101.499 31.0258 104.235 31.0525 106.97 31.0525C111.035 31.0792 113.178 34.0298 113.178 37.2738C113.178 39.8485 112.095 42.4498 108.818 43.1738L114.042 49.5818V49.8232Z"
            fill="#666"
          />
          <path
            d="M117.763 40.491C117.811 43.575 119.684 46.8737 123.43 46.8737C127.322 46.8737 129.194 43.307 129.071 40.0884C128.948 37.059 127.495 33.7884 123.43 33.7884C119.364 33.7884 117.714 37.327 117.763 40.491ZM132.275 40.1964C132.299 42.3417 131.782 44.5684 130.674 46.3097L132.718 48.5097L130.426 51.003L128.332 48.7497C127.026 49.6617 125.375 50.1444 123.43 50.1444C117.294 50.1444 114.584 45.2924 114.56 40.411C114.535 35.5044 117.368 30.5977 123.43 30.5977C129.49 30.5977 132.2 35.3697 132.275 40.1964"
            fill="#666"
          />
          <path
            d="M149.768 31.0797V41.8317C149.768 47.3837 146.639 50.2251 142.303 50.2251C138.164 50.2251 134.64 47.4904 134.64 41.8317V31.0797H137.868V41.8317C137.868 45.2117 139.641 47.0077 142.328 47.0077C145.013 47.0077 146.54 45.0504 146.54 41.8317V31.0797H149.768Z"
            fill="#666"
          />
          <path
            d="M152.972 31.0524H156.2V49.8231H152.972V31.0524Z"
            fill="#666"
          />
          <path
            d="M164.504 34.2704H159.033V31.053H173.225V34.2704H167.756V49.8237H164.504V34.2704Z"
            fill="#666"
          />
          <path
            d="M188.057 49.8232H175.147V31.0525H188.057V34.4858H178.375V38.8018H187.712V42.1005H178.375V46.3378H188.057V49.8232Z"
            fill="#666"
          />
          <path
            d="M205.773 47.4637C204 49.3677 201.708 50.2517 199.22 50.2517C192.813 50.2517 190.104 45.4517 190.079 40.5717C190.055 35.665 192.987 30.677 199.22 30.677C201.56 30.677 203.777 31.6424 205.552 33.5464L203.384 35.825C202.249 34.6197 200.723 34.0557 199.22 34.0557C195.056 34.0557 193.257 37.4357 193.283 40.5717C193.307 43.6824 194.957 46.9277 199.22 46.9277C200.723 46.9277 202.423 46.257 203.556 45.0237L205.773 47.4637Z"
            fill="#666"
          />
          <path
            d="M211.81 34.2704H206.339V31.053H220.531V34.2704H215.062V49.8237H211.81V34.2704Z"
            fill="#666"
          />
          <path
            d="M238.147 31.0797V41.8317C238.147 47.3837 235.018 50.2251 230.682 50.2251C226.543 50.2251 223.019 47.4904 223.019 41.8317V31.0797H226.247V41.8317C226.247 45.2117 228.02 47.0077 230.707 47.0077C233.392 47.0077 234.919 45.0504 234.919 41.8317V31.0797H238.147Z"
            fill="#666"
          />
          <path
            d="M244.604 34.3512V40.3565H249.556C251.627 40.3565 252.513 38.8552 252.513 37.3538C252.513 35.8525 251.601 34.3512 249.556 34.3512H244.604ZM256.628 49.8232H252.759L247.733 43.5485H244.604V49.8232H241.352V31.0258C244.085 31.0258 246.821 31.0525 249.556 31.0525C253.621 31.0792 255.764 34.0298 255.764 37.2738C255.764 39.8485 254.681 42.4498 251.404 43.1738L256.628 49.5818V49.8232Z"
            fill="#666"
          />
          <path
            d="M265.695 34.9944L262.493 42.9864H268.897L265.695 34.9944ZM270.203 46.2837H261.186L259.709 49.8237H256.185L263.921 31.053H267.469L275.205 49.8237H271.658L270.203 46.2837Z"
            fill="#666"
          />
          <path
            d="M79.4374 65.4585V56.0865H85.6387V57.7892H81.0654V60.3505H85.392V61.9865H81.0654V65.4585H79.4374Z"
            fill="#666"
          />
          <path
            d="M89.9857 53.3114H88.2097L87.2977 55.1341V55.2154H88.6284L89.9857 53.3794V53.3114ZM87.2111 56.0728H88.8271V65.4581H87.2111V56.0728Z"
            fill="#666"
          />
          <path
            d="M96.2447 58.3387C95.9487 57.8027 95.1354 57.2934 94.1994 57.2934C92.9914 57.2934 92.4114 57.8427 92.4114 58.5401C92.4114 59.3587 93.298 59.5867 94.334 59.7201C96.134 59.9614 97.8114 60.4721 97.8114 62.7094C97.8114 64.8014 96.1087 65.7001 94.186 65.7001C92.4234 65.7001 91.0674 65.1094 90.426 63.3934L91.782 62.6294C92.1634 63.6614 93.162 64.1174 94.2114 64.1174C95.234 64.1174 96.1967 63.7294 96.1967 62.7094C96.1967 61.8254 95.3447 61.4641 94.1994 61.3294C92.4367 61.1014 90.8087 60.5907 90.8087 58.4867C90.8087 56.5561 92.558 55.7641 94.15 55.7521C95.494 55.7521 96.886 56.1667 97.5407 57.6147L96.2447 58.3387Z"
            fill="#666"
          />
          <path
            d="M99.3951 56.0737H101.011V65.459H99.3951V56.0737Z"
            fill="#666"
          />
          <path
            d="M110.464 64.2789C109.576 65.2309 108.43 65.6736 107.185 65.6736C103.98 65.6736 102.622 63.2736 102.61 60.8336C102.598 58.3789 104.065 55.8856 107.185 55.8856C108.356 55.8856 109.465 56.3682 110.353 57.3202L109.269 58.4602C108.701 57.8576 107.936 57.5749 107.185 57.5749C105.101 57.5749 104.201 59.2642 104.214 60.8336C104.225 62.3882 105.05 64.0109 107.185 64.0109C107.936 64.0109 108.786 63.6762 109.354 63.0589L110.464 64.2789Z"
            fill="#666"
          />
          <path
            d="M115.178 58.0445L113.576 62.0392H116.781L115.178 58.0445ZM117.434 63.6885H112.922L112.182 65.4592H110.42L114.29 56.0725H116.066L119.937 65.4592H118.162L117.434 63.6885Z"
            fill="#666"
          />
          <path
            d="M125.168 63.7554H126.944C128.904 63.7554 129.681 62.2008 129.643 60.6714C129.607 59.2114 128.817 57.7488 126.944 57.7488H125.168V63.7554ZM131.259 60.6848C131.296 63.0594 129.964 65.4581 126.944 65.4581H123.553V56.0728H126.944C129.903 56.0728 131.221 58.3661 131.259 60.6848"
            fill="#666"
          />
          <path
            d="M139.081 65.4585H132.619V56.0732H139.081V57.7892H134.234V59.9478H138.907V61.5972H134.234V63.7145H139.081V65.4585Z"
            fill="#666"
          />
          <path
            d="M142.28 56.0732V63.8225H146.719V65.4585H140.652V56.0732H142.28Z"
            fill="#666"
          />
          <path
            d="M156.314 58.3387C156.018 57.8027 155.204 57.2934 154.268 57.2934C153.06 57.2934 152.48 57.8427 152.48 58.5401C152.48 59.3587 153.367 59.5867 154.403 59.7201C156.203 59.9614 157.88 60.4721 157.88 62.7094C157.88 64.8014 156.178 65.7001 154.255 65.7001C152.492 65.7001 151.136 65.1094 150.495 63.3934L151.851 62.6294C152.232 63.6614 153.231 64.1174 154.28 64.1174C155.303 64.1174 156.266 63.7294 156.266 62.7094C156.266 61.8254 155.414 61.4641 154.268 61.3294C152.506 61.1014 150.878 60.5907 150.878 58.4867C150.878 56.5561 152.627 55.7641 154.219 55.7521C155.563 55.7521 156.955 56.1667 157.61 57.6147L156.314 58.3387Z"
            fill="#666"
          />
          <path
            d="M167.022 56.0861V61.4634C167.022 64.2381 165.455 65.6594 163.286 65.6594C161.215 65.6594 159.451 64.2914 159.451 61.4634V56.0861H161.066V61.4634C161.066 63.1528 161.954 64.0514 163.298 64.0514C164.642 64.0514 165.406 63.0714 165.406 61.4634V56.0861H167.022Z"
            fill="#666"
          />
          <path
            d="M170.565 57.7229V60.7256H173.044C174.08 60.7256 174.524 59.9749 174.524 59.2243C174.524 58.4723 174.066 57.7229 173.044 57.7229H170.565ZM176.582 65.4589H174.646L172.132 62.3216H170.565V65.4589H168.937V56.0603C170.306 56.0603 171.674 56.0736 173.044 56.0736C175.078 56.0856 176.15 57.5616 176.15 59.1843C176.15 60.4723 175.608 61.7709 173.969 62.1336L176.582 65.3376V65.4589Z"
            fill="#666"
          />
          <path
            d="M183.997 65.4585H177.536V56.0732H183.997V57.7892H179.151V59.9478H183.824V61.5972H179.151V63.7145H183.997V65.4585Z"
            fill="#666"
          />
          <path
            d="M191.152 58.3387C190.856 57.8027 190.043 57.2934 189.107 57.2934C187.899 57.2934 187.319 57.8427 187.319 58.5401C187.319 59.3587 188.206 59.5867 189.242 59.7201C191.042 59.9614 192.719 60.4721 192.719 62.7094C192.719 64.8014 191.016 65.7001 189.094 65.7001C187.331 65.7001 185.975 65.1094 185.334 63.3934L186.69 62.6294C187.071 63.6614 188.07 64.1174 189.119 64.1174C190.142 64.1174 191.104 63.7294 191.104 62.7094C191.104 61.8254 190.252 61.4641 189.107 61.3294C187.344 61.1014 185.716 60.5907 185.716 58.4867C185.716 56.5561 187.466 55.7641 189.058 55.7521C190.402 55.7521 191.794 56.1667 192.448 57.6147L191.152 58.3387Z"
            fill="#666"
          />
          <path
            d="M196.522 57.6825H193.785V56.0732H200.886V57.6825H198.15V65.4585H196.522V57.6825Z"
            fill="#666"
          />
          <path
            d="M208.624 65.4585H202.162V56.0732H208.624V57.7892H203.777V59.9478H208.45V61.5972H203.777V63.7145H208.624V65.4585Z"
            fill="#666"
          />
        </svg>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.700")}
      >
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ base: "center", md: "space-between" }}
          align={{ base: "center", md: "center" }}
        >
          <Text>construccion@diseñoafs.com</Text>

          <Text>© 2021 Derechos Reservados</Text>
        </Container>
      </Box>
    </Box>
  );
}
