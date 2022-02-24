module.exports = {
	content: ["./*.{html,js}", "./node_modules/tw-elements/dist/js/**/*.js"],
	theme: {
		extend: {
			colors: {
				dark1: "#232323",
			},
		},
	},
	plugins: [
		require("tw-elements/dist/plugin"),
		require("@tailwindcss/forms"),
		require("@tailwindcss/line-clamp"),
	],
	important: false,
};
