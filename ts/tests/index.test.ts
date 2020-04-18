import {BetterJSON} from "../index";

test("1", (): void => {

	const obj: object = {
		name: "Elijah",
		age: 21
	};

	const str: string = BetterJSON.stringify(obj);
	const obj2: object = BetterJSON.parse(str);

	expect(obj).toEqual(obj2);

});

test("2", (): void => {

	const obj: object = {
		name: "Elijah",
		age: 21,
		info: {
			color: "blue",
			height: "6ft1in"
		}
	};

	const str: string = BetterJSON.stringify(obj);
	const obj2: object = BetterJSON.parse(str);

	expect(obj).toEqual(obj2);

});

test("3", (): void => {

	const obj: { email: string, salt: Buffer } = {
		email: "Elijah",
		salt: Buffer.from("Hello, world!")
	};

	const str: string = BetterJSON.stringify(obj);
	const obj2: { email: string, salt: Buffer } = BetterJSON.parse(str);

	expect(obj2).toEqual(obj);
	expect(obj2.salt.toString("utf8")).toEqual(obj.salt.toString("utf8"));

});

test("4", (): void => {

	const obj: { email: string, security: { salt: Buffer, pepper: Buffer } } = {
		email: "Elijah",
		security: {
			salt: Buffer.from("salt"),
			pepper: Buffer.from("pepper")
		}
	};

	const str: string = BetterJSON.stringify(obj);
	const obj2: { email: string, security: { salt: Buffer, pepper: Buffer } } = BetterJSON.parse(str);

	expect(obj2).toEqual(obj);
	expect(obj2.security.salt.toString("utf8")).toEqual(obj.security.salt.toString("utf8"));
	expect(obj2.security.pepper.toString("utf8")).toEqual(obj.security.pepper.toString("utf8"));

});