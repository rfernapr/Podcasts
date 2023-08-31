module.exports = {
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
    moduleNameMapper: {
		'^.+\\.(css|less|scss)$': 'ts-jest',
	},
}