const theme = {
	colors: {
		black_plum: "#011638",
		grape: "#46237A",
		putty: "#CDCDCD",
		mint: "#DFF8EB",
		spruce: "#214E34",
		dirty_concord: "#34344A",
		/////// Theme Colors for 3rd Canvas
		white: "#FFFFFF",
		red: "#fb3640",
		grey: "#605f5e",
		dark_blue: "#1d3461",
		blue: "#1f487e",
		light_blue: "#247ba0",
		black: "#000"
	},

	color: {
		primaryColor: "#265077",
		primaryDark: "#1d3461",
		primaryBgShading: "#011638",
		secondaryColor: "#03112B",
		secondaryBgShading: "#F6F8F9",
		accent: "#DFF8EB",
		grayShade: "#D6D6D6",
		emphasis: "#214E34",
		darkText: "#595959",
		lightText: "#FFFFFF",
		danger: "red"
	},

	colorScheme: {
		logoColor: () => {
			return theme.color.emphasis;
		},
		headerBgColor: () => {
			return theme.color.lightText;
		},
		headerFontColor: () => {
			return theme.color.accent;
		},
		footerBgColor: () => {
			return theme.color.primaryColor;
		},
		footerFontColor: () => {
			return theme.color.lightText;
		},
		headingColor: () => {
			return theme.color.primaryColor;
		},
		defaultFontColor: () => {
			return theme.color.darkText;
		},
		defaultLinkColor: () => {
			return theme.color.secondaryColor;
		},
		containerBgColor: () => {
			return theme.primaryBgShading;
		},
		cardBgColor: () => {
			return theme.secondaryBgShading;
		},
		defaultBorderColor: () => {
			return theme.color.primaryDark;
		},
		secondaryBorderColor: () => {
			return theme.color.grayShade;
		}
	},

	fontStyles: {
		logoFont:
			"-apple-system, BlinkMacSystemFont, Helvetica, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans- serif",
		headingFont:
			"-apple-system, BlinkMacSystemFont, Helvetica, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans- serif",
		defaultFont:
			"-apple-system, BlinkMacSystemFont, Helvetica, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans- serif"
	},

	fontSizing: {
		// Based on CSS default font-resizing of 62.5%
		xxxs: "calc(.625 * 0.8rem)",
		xxs: "calc(.625 * 1rem)",
		xs: "calc(.625 * 1.2rem)", // base size for mobile view
		s: "calc(.625 * 1.4rem)", // base size for text
		sm: "calc(.625 * 1.6rem)", // base size for menu and button text
		m: "calc(.625 * 1.8rem)", // base heading/sub-heading size
		ml: "calc(.625 * 2rem)", // base headline size
		l: "calc(.625 * 3rem)", // for big emphasis
		xl: "calc(.625 * 4rem)", // ultra large
		xxl: "calc(.625 * 5rem)", // site banner headline
		xxxl: "calc(.625 * 6rem)" // site banner headline
	},

	breakpoints: [
		"(max-width: 600px)",
		"(max-width: 768px)",
		"(min-width: 769px)"
	],
	// for media queries -- express them as @media ${theme.breakpoints[0]} {styles here}
	// in the arr, the first is for mobile, second is for portrait tablet, third is for desktop
	flex: (direction = "row", align = "normal", justify = "normal") => `{
    display: flex;
    flex-direction: ${direction};
    justify-content: ${justify};
    align-items: ${align};
  }`
};

export default theme;

export const {
	colors,
	color,
	colorScheme,
	fontStyles,
	fontSizing,
	breakpoints,
	flex
} = theme;
