const base = 'https://dankmemer.services/api';
const centra = require('@aero/centra');
const { MessageAttachment } = require('discord.js');

class DankClient {

	/**
     * @constructor
     * @param {string} token API token
     */

	constructor(token) {
		if (!token) throw new TypeError('Token was not provided!');
		this.token = token;
		this.endpoints = [
			'abandon', 'aborted', 'affect', 'airpods',
			'america', 'armor', 'balloon', 'bed',
			'bongocat', 'boo', 'brain', 'brazzers',
			'byemom', 'cancer', 'changemymind', 'cheating',
			'citation', 'communism', 'confusedcat', 'corporate',
			'crab', 'cry', 'dab', 'dank',
			'deepfry', 'delete', 'disability', 'doglemon',
			'door', 'egg', 'excuseme', 'expanddong',
			'facts', 'failure', 'fakenews', 'fedora',
			'floor', 'fuck', 'garfield', 'gay',
			'goggles', 'hitler', 'humansgood', 'inator',
			'invert', 'jail', 'justpretending', 'kimborder',
			'knowyourlocation', 'kowalski', 'laid', 'lick',
			'madethis', 'magik', 'master', 'meme',
			'note', 'nothing', 'ohno', 'piccolo',
			'plan', 'presentation', 'quote', 'radialblur',
			'rip', 'salty', 'satan', 'savehumanity',
			'screams', 'shit', 'sickban', 'slap',
			'slapsroof', 'sneakyfox', 'spank', 'stroke',
			'surprised', 'sword', 'thesearch', 'trash',
			'tiger', 'trigger', 'tweet', 'ugly',
			'unpopular', 'violence', 'violentsparks', 'vr',
			'walking', 'wanted', 'wrap', 'whodidthis',
			'whothisis', 'yomomma', 'youtube'
		];
	}
	/**
     * abandon
     * @param {String} text text to generate meme
     */

	async abandon(text) {
		const data = await centra(base).path('abandon').query({ text }).header('Authorization', this.token).send();
		if (data.statusCode !== 200) throw new Error(data.text);
		data.body = new MessageAttachment(data.body);
		return data.body;
	}

	/**
     * aborted
     * @param {String} avatar avatar
     */

	async aborted(avatar1) {
		const data = await centra(base).path('aborted').query({ avatar1 }).header('Authorization', this.token).send();
		if (data.statusCode !== 200) throw new Error(data.text);
		data.body = new MessageAttachment(data.body);
		return data.body;
	}

	/**
     * affect
     * @param {String} avatar avatar
     */

	async affect(avatar1) {
		const data = await centra(base).path('affect').query({ avatar1 }).header('Authorization', this.token).send();
		if (data.statusCode == !200) throw new Error(data.text);
		data.body = new MessageAttachment(data.body);
		return data.body;
	}

	/**
     * airpods
     * @param {String} avatar avatar
     */

	async airpods(avatar1) {
		const data = await centra(base).path('airpods').query({ avatar1 }).header('Authorization', this.token).send();
		if (data.statusCode == !200) throw new Error(data.text);
		data.body = new MessageAttachment(data.body);
		return data.body;
	}

	/**
     * america
     * @param {String} avatar avatar
     */

	async america(avatar1) {
		const data = await centra(base).path('america').query({ avatar1 }).header('Authorization', this.token).send();
		if (data.statusCode == !200) throw new Error(data.text);
		data.body = new MessageAttachment(data.body);
		return data.body;
	}

	/**
     * armor
     * @param {String} text text
     */

	async armor(text) {
		const data = await centra(base).path('armor').query({ text }).header('Authorization', this.token).send();
		if (data.statusCode == !200) throw new Error(data.text);
		data.body = new MessageAttachment(data.body);
		return data.body;
	}

	/**
     * balloon
     * @param {String} text text
     */

	async balloon(text) {
		const data = await centra(base).path('balloon').query({ text }).header('Authorization', this.token).send();
		if (data.statusCode == !200) throw new Error(data.text);
		data.body = new MessageAttachment(data.body);
		return data.body;
	}

	/**
     * bed
     * @param {String} avatar1 avatar1
     * @param {String} avatar2 avatar2
     */

	async bed(avatar1, avatar2) {
		const data = await centra(base).path('bed').query({ avatar1, avatar2 }).header('Authorization', this.token).send();
		if (data.statusCode == !200) throw new Error(data.text);
		data.body = new MessageAttachment(data.body);
		return data.body;
	}

	/**
     * bongocat
     * @param {String} avatar1 avatar1
     */

	async bongocat(avatar1) {
		const data = await centra(base).path('bongocat').query({ avatar1 }).header('Authorization', this.token).send();
		if (data.statusCode == !200) throw new Error(data.text);
		data.body = new MessageAttachment(data.body);
		return data.body;
	}

	/**
     * boo
     * @param {String} text text
     */

	async boo(text) {
		const data = await centra(base).path('boo').query({ text }).header('Authorization', this.token).send();
		if (data.statusCode == !200) throw new Error(data.text);
		data.body = new MessageAttachment(data.body);
		return data.body;
	}

	/**
     * brain
     * @param {String} text text
     */

	async brain(text) {
		const data = await centra(base).path('brain').query({ text }).header('Authorization', this.token).send();
		if (data.statusCode == !200) throw new Error(data.text);
		data.body = new MessageAttachment(data.body);
		return data.body;
	}

	/**
     * brazzers
     * @param {String} avatar1 avatar1
     */

	async brazzers(avatar1) {
		const data = await centra(base).path('brazzers').query({ avatar1 }).header('Authorization', this.token).send();
		if (data.statusCode == !200) throw new Error(data.text);
		data.body = new MessageAttachment(data.body);
		return data.body;
	}

	/**
     * byemom
     * @param {String} avatar1 avatar1
     * @param {String} username1 username1
     * @param {String} text text
     */

	async byemom(avatar1, username1, text) {
		const data = await centra(`${base}/byemom?avatar1=${avatar1}&username1=${username1}&text=${text}`).header('Authorization', this.token).send();
		if (data.statusCode == !200) throw new Error(data.text);
		data.body = new MessageAttachment(data.body);
		return data.body;
	}

	/**
     * cancer
     * @param {String} avatar1 avatar1
     */

	async cancer(avatar1) {
		const data = await centra(base).path('cancer').query({ avatar1 }).header('Authorization', this.token).send();
		if (data.statusCode == !200) throw new Error(data.text);
		data.body = new MessageAttachment(data.body);
		return data.body;
	}

	/**
     * changemymind
     * @param {String} text text
     */

	async changemymind(text) {
		const data = await centra(base).path('changemymind').query({ text }).header('Authorization', this.token).send();
		if (data.statusCode == !200) throw new Error(data.text);
		data.body = new MessageAttachment(data.body);
		return data.body;
	}

	/**
     * cheating
     * @param {String} text text
     */

	async cheating(text) {
		const data = await centra(base).path('cheating').query({ text }).header('Authorization', this.token).send();
		if (data.statusCode == !200) throw new Error(data.text);
		data.body = new MessageAttachment(data.body);
		return data.body;
	}

	/**
     * citation
     * @param {String} text text
     */

	async citation(text) {
		const data = await centra(base).path('citation').query({ text }).header('Authorization', this.token).send();
		if (data.statusCode == !200) throw new Error(data.text);
		data.body = new MessageAttachment(data.body);
		return data.body;
	}

	/**
     * communism
     * @param {String} avatar1 avatar1
     */

	async communism(avatar1) {
		const data = await centra(base).path('communism').query({ avatar1 }).header('Authorization', this.token).send();
		if (data.statusCode == !200) throw new Error(data.text);
		data.body = new MessageAttachment(data.body);
		return data.body;
	}

	/**
     * confusedcat
     * @param {String} text text
     */

	async confusedcat(text) {
		const data = await centra(base).path('confusedcat').query({ text }).header('Authorization', this.token).send();
		if (data.statusCode == !200) throw new Error(data.text);
		data.body = new MessageAttachment(data.body);
		return data.body;
	}

	/**
     * corporate
     * @param {String} avatar1 avatar1
     */

	async corporate(avatar1) {
		const data = await centra(base).path('corporate').query({ avatar1 }).header('Authorization', this.token).send();
		if (data.statusCode == !200) throw new Error(data.text);
		data.body = new MessageAttachment(data.body);
		return data.body;
	}

	/**
     * crab
     * This endpoint returns an MP4 file. Make sure your application knows how to handle this format. Malformed requests count against your ratelimit for this endpoint. Separate text with a comma.
     * @param {String} text text
     */

	async crab(text) {
		const data = await centra(base).path('crab').query({ text }).header('Authorization', this.token).send();
		if (data.statusCode == !200) throw new Error(data.text);
		return data.body;
	}

	/**
     * cry
     * @param {String} text text
     */

	async cry(text) {
		const data = await centra(base).path('cry').query({ text }).header('Authorization', this.token).send();
		if (data.statusCode == !200) throw new Error(data.text);
		data.body = new MessageAttachment(data.body);
		return data.body;
	}

	// // Dank Memer \\\\
	/**
     * dab
     * @param {String} avatar1 avatar
     */

	async dab(avatar1) {
		const data = await centra(base).path('dab').query({ avatar1 }).header('Authorization', this.token).send();
		if (data.statusCode == !200) throw new Error(data.text);
		data.body = new MessageAttachment(data.body);
		return data.body;
	}

	/**
     * dank
     * @param {String} avatar1 avatar
     */

	async dank(avatar1) {
		const data = await centra(base).path('dank').query({ avatar1 }).header('Authorization', this.token).send();
		if (data.statusCode == !200) throw new Error(data.text);
		data.body = new MessageAttachment(data.body);
		return data.body;
	}

	/**
     * deepfry
     * @param {String} avatar1 avatar
     */

	async deepfry(avatar1) {
		const data = await centra(base).path('deepfry').query({ avatar1 }).header('Authorization', this.token).send();
		if (data.statusCode == !200) throw new Error(data.text);
		data.body = new MessageAttachment(data.body);
		return data.body;
	}

	/**
     * delete
     * @param {String} avatar1 avatar
     */

	async delete(avatar1) {
		const data = await centra(base).path('delete').query({ avatar1 }).header('Authorization', this.token).send();
		if (data.statusCode == !200) throw new Error(data.text);
		data.body = new MessageAttachment(data.body);
		return data.body;
	}

	/**
     * disability
     * @param {String} avatar1 avatar
     */

	async disability(avatar1) {
		const data = await centra(base).path('disability').query({ avatar1 }).header('Authorization', this.token).send();
		if (data.statusCode == !200) throw new Error(data.text);
		data.body = new MessageAttachment(data.body);
		return data.body;
	}

	/**
     * doglemon
     * @param {String} text text
     */

	async doglemon(text) {
		const data = await centra(base).path('doglemon').query({ text }).header('Authorization', this.token).send();
		if (data.statusCode == !200) throw new Error(data.text);
		data.body = new MessageAttachment(data.body);
		return data.body;
	}

	/**
     * door
     * @param {String} avatar1 avatar1
     */

	async door(avatar1) {
		const data = await centra(base).path('door').query({ avatar1 }).header('Authorization', this.token).send();
		if (data.statusCode == !200) throw new Error(data.text);
		data.body = new MessageAttachment(data.body);
		return data.body;
	}

	/**
     * egg
     * @param {String} avatar1 avatar1
     */

	async egg(avatar1) {
		const data = await centra(base).path('egg').query({ avatar1 }).header('Authorization', this.token).send();
		if (data.statusCode == !200) throw new Error(data.text);
		data.body = new MessageAttachment(data.body);
		return data.body;
	}

	/**
     * excuseme
     * @param {String} text text
     */

	async excuseme(text) {
		const data = await centra(base).path('excuseme').query({ text }).header('Authorization', this.token).send();
		if (data.statusCode == !200) throw new Error(data.text);
		data.body = new MessageAttachment(data.body);
		return data.body;
	}

	/**
     * expanddong
     * @param {String} text text
     */

	async expanddong(text) {
		const data = await centra(base).path('expanddong').query({ text }).header('Authorization', this.token).send();
		if (data.statusCode == !200) throw new Error(data.text);
		data.body = new MessageAttachment(data.body);
		return data.body;
	}

	/**
     * facts
     * @param {String} text text
     */

	async facts(text) {
		const data = await centra(base).path('facts').query({ text }).header('Authorization', this.token).send();
		if (data.statusCode == !200) throw new Error(data.text);
		data.body = new MessageAttachment(data.body);
		return data.body;
	}

	/**
     * failure
     * @param {String} avatar1 avatar1
     */

	async failure(avatar1) {
		const data = await centra(base).path('failure').query({ avatar1 }).header('Authorization', this.token).send();
		if (data.statusCode == !200) throw new Error(data.text);
		data.body = new MessageAttachment(data.body);
		return data.body;
	}

	/**
     * fakenews
     * @param {String} avatar1 avatar1
     */

	async fakenews(avatar1) {
		const data = await centra(base).path('fakenews').query({ avatar1 }).header('Authorization', this.token).send();
		if (data.statusCode == !200) throw new Error(data.text);
		data.body = new MessageAttachment(data.body);
		return data.body;
	}

	/**
     * fedora
     * @param {String} avatar1 avatar1
     */

	async fedora(avatar1) {
		const data = await centra(base).path('fedora').query({ avatar1 }).header('Authorization', this.token).send();
		if (data.statusCode == !200) throw new Error(data.text);
		data.body = new MessageAttachment(data.body);
		return data.body;
	}

	/**
     * floor
     * @param {String} avatar1 avatar1
     * @param {String} text text
     */

	async floor(avatar1, text) {
		const data = await centra(base).path('floor').query({ avatar1, text }).header('Authorization', this.token).send();
		if (data.statusCode == !200) throw new Error(data.text);
		data.body = new MessageAttachment(data.body);
		return data.body;
	}

	/**
     * fuck
     * @param {String} text text
     */

	async fuck(text) {
		const data = await centra(base).path('fuck').query({ text }).header('Authorization', this.token).send();
		if (data.statusCode == !200) throw new Error(data.text);
		data.body = new MessageAttachment(data.body);
		return data.body;
	}
	/**
     * garfield
     * @param {String} avatar1 avatar
     * @param {String} text text
     */

	async garfield(avatar1, text) {
		const data = await centra(`${base}/garfield?avatar1=${avatar1}&text=${text}`).header('Authorization', this.token).send();
		if (data.statusCode == !200) throw new Error(data.text);
		data.body = new MessageAttachment(data.body);
		return data.body;
	}
	/**
     * gay
     * @param {String} avatar1 avatar
     */

	async gay(avatar1) {
		const data = await centra(base).path('gay').query({ avatar1 }).header('Authorization', this.token).send();
		if (data.statusCode == !200) throw new Error(data.text);
		data.body = new MessageAttachment(data.body);
		return data.body;
	}

	/**
     * goggles
     * @param {String} avatar1 avatar
     */

	async goggles(avatar1) {
		const data = await centra(base).path('goggles').query({ avatar1 }).header('Authorization', this.token).send();
		if (data.statusCode == !200) throw new Error(data.text);
		data.body = new MessageAttachment(data.body);
		return data.body;
	}

	/**
     * hitler
     * @param {String} avatar1 avatar
     */

	async hitler(avatar1) {
		const data = await centra(base).path('hitler').query({ avatar1 }).header('Authorization', this.token).send();
		if (data.statusCode == !200) throw new Error(data.text);
		data.body = new MessageAttachment(data.body);
		return data.body;
	}

	/**
     * humansgood
     * @param {String} text text
     */

	async humansgood(text) {
		const data = await centra(base).path('humansgood').query({ text }).header('Authorization', this.token).send();
		if (data.statusCode == !200) throw new Error(data.text);
		data.body = new MessageAttachment(data.body);
		return data.body;
	}

	/**
     * inator
     * @param {String} text text
     */

	async inator(text) {
		const data = await centra(base).path('inator').query({ text }).header('Authorization', this.token).send();
		if (data.statusCode == !200) throw new Error(data.text);
		data.body = new MessageAttachment(data.body);
		return data.body;
	}

	/**
     * invert
     * @param {String} avatar1 avatar1
     */

	async invert(avatar1) {
		const data = await centra(base).path('invert').query({ avatar1 }).header('Authorization', this.token).send();
		if (data.statusCode == !200) throw new Error(data.text);
		data.body = new MessageAttachment(data.body);
		return data.body;
	}

	/**
     * jail
     * @param {String} avatar1 avatar1
     */

	async jail(avatar1) {
		const data = await centra(base).path('jail').query({ avatar1 }).header('Authorization', this.token).send();
		if (data.statusCode == !200) throw new Error(data.text);
		data.body = new MessageAttachment(data.body);
		return data.body;
	}

	/**
     * justpretending
     * @param {String} text text
     */

	async justpretending(text) {
		const data = await centra(base).path('justpretending').query({ text }).header('Authorization', this.token).send();
		if (data.statusCode == !200) throw new Error(data.text);
		data.body = new MessageAttachment(data.body);
		return data.body;
	}

	/**
     * kimborder
     * @param {String} avatar1 avatar1
     */

	async kimborder(avatar1) {
		const data = await centra(base).path('kimboarder').query({ avatar1 }).header('Authorization', this.token).send();
		if (data.statusCode == !200) throw new Error(data.text);
		data.body = new MessageAttachment(data.body);
		return data.body;
	}

	/**
     * knowyourlocation
     * @param {String} text text
     */

	async knowyourlocation(text) {
		const data = await centra(base).path('knowyourlocation').query({ text }).header('Authorization', this.token).send();
		if (data.statusCode == !200) throw new Error(data.text);
		data.body = new MessageAttachment(data.body);
		return data.body;
	}

	/**
     * kowalski
     * @param {String} text text
     */

	async kowalski(text) {
		const data = await centra(base).path('kowalski').query({ text }).header('Authorization', this.token).send();
		if (data.statusCode == !200) throw new Error(data.text);
		data.body = new MessageAttachment(data.body);
		return data.body;
	}

	/**
     * laid
     * @param {String} avatar1 avatar1
     */

	async laid(avatar1) {
		const data = await centra(base).path('laid').query({ avatar1 }).header('Authorization', this.token).send();
		if (data.statusCode == !200) throw new Error(data.text);
		data.body = new MessageAttachment(data.body);
		return data.body;
	}

	/**
     * lick
     * @param {String} text text
     */

	async lick(text) {
		const data = await centra(base).path('lick').query({ text }).header('Authorization', this.token).send();
		if (data.statusCode == !200) throw new Error(data.text);
		data.body = new MessageAttachment(data.body);
		return data.body;
	}

	/**
     * madethis
     * @param {String} avatar1 avatar1
     * @param {String} avatar2 avatar2
     */

	async madethis(avatar1, avatar2) {
		const data = await centra(base).path('disability').query({ avatar1, avatar2 }).header('Authorization', this.token).send();
		if (data.statusCode == !200) throw new Error(data.text);
		data.body = new MessageAttachment(data.body);
		return data.body;
	}
	/**
     * magik
     * @param {String} avatar1 avatar1
     */

	async magik(avatar1) {
		const data = await centra(base).path('magik').query({ avatar1 }).header('Authorization', this.token).send();
		if (data.statusCode == !200) throw new Error(data.text);
		data.body = new MessageAttachment(data.body);
		return data.body;
	}

	/**
     * master
     * @param {String} text text
     */

	async master(text) {
		const data = await centra(base).path('master').query({ avatar1 }).header('Authorization', this.token).send();
		if (data.statusCode == !200) throw new Error(data.text);
		data.body = new MessageAttachment(data.body);
		return data.body;
	}

	/**
     * meme
     * This endpoint works a bit differently from the other endpoints. This endpoint takes in top_text and bottom_text parameters instead of text. It also supports color and font parameters. Fonts supported are: arial, arimobold, impact, robotomedium, robotoregular, sans, segoeuireg, tahoma and verdana. Colors can be defined with HEX codes or web colors, e.g. black, white, orange etc. Try your luck ;) The default is Impact in white
     * @param {String} avatar1 avatar1
     * @param {String} top_text top_text
     * @param {String} bottom_text bottom_text
     * @param {String} color color
     * @param {String} font font
     */

	async meme(avatar1, top_text, bottom_text, color, font) {
		const data = await centra(`${base}/meme?avatar1=${avatar1}&top_text=${top_text}&bottom_text=${bottom_text}&color=${color || 'white'}&font=${font || 'arial'}`).header('Authorization', this.token).send();
		if (data.statusCode == !200) throw new Error(data.text);
		data.body = new MessageAttachment(data.body);
		return data.body;
	}

	/**
     * note
     * @param {String} text text
     */

	async note(text) {
		const data = await centra(base).path('note').query({ text }).header('Authorization', this.token).send();
		if (data.statusCode == !200) throw new Error(data.text);
		data.body = new MessageAttachment(data.body);
		return data.body;
	}

	/**
     * nothing
     * @param {String} text text
     */

	async nothing(text) {
		const data = await centra(base).path('nothing').query({ text }).header('Authorization', this.token).send();
		if (data.statusCode == !200) throw new Error(data.text);
		data.body = new MessageAttachment(data.body);
		return data.body;
	}


	/**
     * ohno
     * @param {String} text text
     */

	async ohno(text) {
		const data = await centra(base).path('ohno').query({ text }).header('Authorization', this.token).send();
		if (data.statusCode == !200) throw new Error(data.text);
		data.body = new MessageAttachment(data.body);
		return data.body;
	}


	/**
     * piccolo
     * @param {String} text text
     */

	async piccolo(text) {
		const data = await centra(base).path('piccolo').query({ text }).header('Authorization', this.token).send();
		if (data.statusCode == !200) throw new Error(data.text);
		data.body = new MessageAttachment(data.body);
		return data.body;
	}


	/**
     * plan
     * @param {String} text text
     */

	async plan(text) {
		const data = await centra(base).path('plan').query({ text }).header('Authorization', this.token).send();
		if (data.statusCode == !200) throw new Error(data.text);
		data.body = new MessageAttachment(data.body);
		return data.body;
	}

	/**
     * presentation
     * @param {String} text text
     */

	async presentation(text) {
		const data = await centra(base).path('presentation').query({ text }).header('Authorization', this.token).send();
		if (data.statusCode == !200) throw new Error(data.text);
		data.body = new MessageAttachment(data.body);
		return data.body;
	}
	/**
     * quote
     * @param {String} avatar1 avatar1
     * @param {String} username1 username1
     * @param {String} text text
     */

	async quote(avatar1, username1, text) {
		const data = await centra(`${base}/quote?avatar1=${avatar1}&username1=${username1}text=${text}`);
		if (data.statusCode == !200) throw new Error(data.text);
		data.body = new MessageAttachment(data.body);
		return data.body;
	}

	/**
     * radialblur
     * @param {String} avatar1 avatar1
     */

	async radialblur(avatar1) {
		const data = await centra(base).path('disability').query({ avatar1 }).header('Authorization', this.token).send();
		if (data.statusCode == !200) throw new Error(data.text);
		data.body = new MessageAttachment(data.body);
		return data.body;
	}

	/**
     * rip
     * @param {String} avatar1 avatar1
     */

	async rip(avatar1) {
		const data = await centra(base).path('rip').query({ avatar1 }).header('Authorization', this.token).send();
		if (data.statusCode == !200) throw new Error(data.text);
		data.body = new MessageAttachment(data.body);
		return data.body;
	}


	/**
     * roblox
     * @param {String} avatar1 avatar1
     */

	async roblox(avatar1) {
		const data = await centra(base).path('roblox').query({ avatar1 }).header('Authorization', this.token).send();
		if (data.statusCode == !200) throw new Error(data.text);
		data.body = new MessageAttachment(data.body);
		return data.body;
	}

	/**
     * salty
     * @param {String} avatar1 avatar1
     */

	async salty(avatar1) {
		const data = await centra(base).path('salty').query({ avatar1 }).header('Authorization', this.token).send();
		if (data.statusCode == !200) throw new Error(data.text);
		data.body = new MessageAttachment(data.body);
		return data.body;
	}


	/**
     * satan
     * @param {String} avatar1 avatar1
     */

	async satan(avatar1) {
		const data = await centra(base).path('satan').query({ avatar1 }).header('Authorization', this.token).send();
		if (data.statusCode == !200) throw new Error(data.text);
		data.body = new MessageAttachment(data.body);
		return data.body;
	}


	/**
     * savehumanity
     * @param {String} text text
     */

	async savehumanity(text) {
		const data = await centra(base).path('savehumanity').query({ text }).header('Authorization', this.token).send();
		if (data.statusCode == !200) throw new Error(data.text);
		data.body = new MessageAttachment(data.body);
		return data.body;
	}


	/**
     * screams
     * @param {String} avatar1 avatar1
     * @param {String} avatar2 avatar2
     */

	async screams(avatar1, avatar2) {
		const data = await centra(`${base}/screams?avatar1=${avatar1}&avatar2=${avatar2}`).header('Authorization', this.token).send();
		if (data.statusCode == !200) throw new Error(data.text);
		data.body = new MessageAttachment(data.body);
		return data.body;
	}

	/**
     * shit
     * @param {String} text text
     */

	async shit(text) {
		const data = await centra(base).path('shit').query({ text }).header('Authorization', this.token).send();
		if (data.statusCode == !200) throw new Error(data.text);
		data.body = new MessageAttachment(data.body);
		return data.body;
	}

	/**
     * sickban
     * @param {String} avatar1 avatar1
     */

	async sickban(avatar1) {
		const data = await centra(base).path('sneakyfox').query({ avatar1 }).header('Authorization', this.token).send();
		if (data.statusCode == !200) throw new Error(data.text);
		data.body = new MessageAttachment(data.body);
		return data.body;
	}

	/**
     * slap
     * @param {String} avatar1 avatar1
     * @param {String} avatar2 avatar2
     */

	async slap(avatar1, avatar2) {
		const data = await centra(`${base}/slap?avatar1=${avatar1}&avatar2=${avatar2}`).header('Authorization', this.token).send();
		if (data.statusCode == !200) throw new Error(data.text);
		data.body = new MessageAttachment(data.body);
		return data.body;
	}

	/**
     * slapsroof
     * @param {String} text text
     */

	async slapsroof(text) {
		const data = await centra(base).path('slapsroof').query({ text }).header('Authorization', this.token).send();
		if (data.statusCode == !200) throw new Error(data.text);
		data.body = new MessageAttachment(data.body);
		return data.body;
	}

	/**
     * sneakyfox
     * @param {String} text text
     */

	async sneakyfox(text) {
		const data = await centra(base).path('sneakyfox').query({ text }).header('Authorization', this.token).send();
		if (data.statusCode == !200) throw new Error(data.text);
		data.body = new MessageAttachment(data.body);
		return data.body;
	}

	/**
     * spank
     * @param {String} avatar1 avatar1
     * @param {String} avatar2 avatar2
     */

	async spank(avatar1, avatar2) {
		const data = await centra(`${base}/spank?avatar1=${avatar1}&avatar2=${avatar2}`).header('Authorization', this.token).send();
		if (data.statusCode == !200) throw new Error(data.text);
		data.body = new MessageAttachment(data.body);
		return data.body;
	}

	/**
     * stroke
     * @param {String} text text
     */

	async stroke(text) {
		const data = await centra(base).path('stroke').query({ text }).header('Authorization', this.token).send();
		if (data.statusCode == !200) throw new Error(data.text);
		data.body = new MessageAttachment(data.body);
		return data.body;
	}

	/**
     * surprised
     * @param {String} text text
     */

	async surprised(text) {
		const data = await centra(base).path('suprised').query({ text }).header('Authorization', this.token).send();
		if (data.statusCode == !200) throw new Error(data.text);
		data.body = new MessageAttachment(data.body);
		return data.body;
	}

	/**
     * sword
     * @param {String} text text
     * @param {String} username1 username1
     */

	async sword(text, username1) {
		const data = await centra(`${base}/sword?text=${text}&username1=${username1}`).header('Authorization', this.token).send();
		if (data.statusCode == !200) throw new Error(data.text);
		data.body = new MessageAttachment(data.body);
		return data.body;
	}

	/**
     * thesearch
     * @param {String} text text
     */

	async thesearch(text) {
		const data = await centra(base).path('thesearch').query({ text }).header('Authorization', this.token).send();
		if (data.statusCode == !200) throw new Error(data.text);
		data.body = new MessageAttachment(data.body);
		return data.body;
	}

	/**
     * trash
     * @param {String} avatar1 avatar1
     */

	async trash(avatar1) {
		const data = await centra(base).path('trash').query({ avatar1 }).header('Authorization', this.token).send();
		if (data.statusCode == !200) throw new Error(data.text);
		data.body = new MessageAttachment(data.body);
		return data.body;
	}

	/**
     * tiger
     * @param {String} avatar1 avatar1
     */

	async tiger(avatar1) {
		const data = await centra(base).path('tiger').query({ avatar1 }).header('Authorization', this.token).send();
		if (data.statusCode == !200) throw new Error(data.text);
		data.body = new MessageAttachment(data.body);
		return data.body;
	}

	/**
     * trigger
     * @param {String} avatar1 avatar1
     */

	async trigger(avatar1) {
		const data = await centra(base).path('trigger').query({ avatar1 }).header('Authorization', this.token).send();
		if (data.statusCode == !200) throw new Error(data.text);
		data.body = new MessageAttachment(data.body);
		return data.body;
	}

	/**
     * tweet
     * @param {String} avatar1 avatar1
     * @param {String} username1 username1
     * @param {String} text text
     */

	async tweet(avatar1, username1, text) {
		const data = await centra(`${base}/tweet?avatar1=${avatar1}&username1=${username1}&text=${text}`).header('Authorization', this.token).send();
		if (data.statusCode == !200) throw new Error(data.text);
		data.body = new MessageAttachment(data.body);
		return data.body;
	}

	/**
     * ugly
     * @param {String} avatar1 avatar1
     */

	async ugly(avatar1) {
		const data = await centra(base).path('ugly').query('avatar1', avatar1).header('Authorization', this.token).send();
		if (data.statusCode == !200) throw new Error(data.text);
		data.body = new MessageAttachment(data.body);
		return data.body;
	}

	/**
     * unpopular
     * @param {String} avatar1 avatar1
     * @param {String} text text
     */

	async unpopular(avatar1, text) {
		const data = await centra(`${base}/unpopular?avatar1=${avatar1}&text=${text}`).header('Authorization', this.token).send();
		if (data.statusCode == !200) throw new Error(data.text);
		data.body = new MessageAttachment(data.body);
		return data.body;
	}

	/**
     * violence
     * @param {String} text text
     */

	async violence(text) {
		const data = await centra(base).path('violence').query('text', text).header('Authorization', this.token).send();
		if (data.statusCode == !200) throw new Error(data.text);
		data.body = new MessageAttachment(data.body);
		return data.body;
	}

	/**
     * violentsparks
     * @param {String} text text
     */

	async violentsparks(text) {
		const data = await centra(base).path('violentsparks').query('text', text).header('Authorization', this.token).send();
		if (data.statusCode == !200) throw new Error(data.text);
		data.body = new MessageAttachment(data.body);
		return data.body;
	}

	/**
     * vr
     * @param {String} text text
     */

	async vr(text) {
		const data = await centra(base).path('vr').query('text', text).header('Authorization', this.token).send();
		if (data.statusCode == !200) throw new Error(data.text);
		data.body = new MessageAttachment(data.body);
		return data.body;
	}

	/**
     * walking
     * @param {String} text text
     */

	async walking(text) {
		const data = await centra(base).path('walking').query('text', text).header('Authorization', this.token).send();
		if (data.statusCode == !200) throw new Error(data.text);
		data.body = new MessageAttachment(data.body);
		return data.body;
	}

	/**
     * wanted
     * @param {String} avatar1 avatar1
     */

	async wanted(avatar1) {
		const data = await centra(base).path('wanted').query('avatar1', avatar1).header('Authorization', this.token).send();
		if (data.statusCode == !200) throw new Error(data.text);
		data.body = new MessageAttachment(data.body);
		return data.body;
	}

	/**
     * wrap
     * @param {String} avatar1 avatar1
     */

	async wrap(avatar1) {
		const data = await centra(base).path('wrap').query('avatar1', avatar1).header('Authorization', this.token).send();
		if (data.statusCode == !200) throw new Error(data.text);
		data.body = new MessageAttachment(data.body);
		return data.body;
	}

	/**
     * whodidthis
     * @param {String} avatar1 avatar1
     */

	async whodidthis(avatar1) {
		const data = await centra(base).path('whodidthis').query('avatar1', avatar1).header('Authorization', this.token).send();
		if (data.statusCode == !200) throw new Error(data.text);
		data.body = new MessageAttachment(data.body);
		return data.body;
	}
	/**
     * whothisis
     * @param {String} avatar1 avatar1
     */

	async whothisis(avatar1) {
		const data = await centra(base).path('whothisis').query('avatar1', avatar1).header('Authorization', this.token).send();
		if (data.statusCode == !200) throw new Error(data.text);
		data.body = new MessageAttachment(data.body);
		return data.body;
	}
	/**
     * yomomma
     */

	async yomomma() {
		const data = await centra(base).path('yomomma').header('Authorization', this.token).send();
		if (data.statusCode == !200) throw new Error(data.text);
		data.body = JSON.parse(data.body);
		return data.body.text;
	}

	/**
     * youtube
     * @param {String} avatar1 avatar1
     * @param {String} username1 username1
     * @param {String} text text
     */

	async youtube(avatar1, username1, text) {
		const data = await centra(`${base}/youtube?avatar1=${avatar1}&username1=${username1}&text=${text}`).header('Authorization', this.token).send();
		if (data.statusCode == !200) throw new Error(data.text);
		data.body = new MessageAttachment(data.body);
		return data.body;
	}

}
module.exports = DankClient;
