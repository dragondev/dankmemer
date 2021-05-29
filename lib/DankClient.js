const base = 'https://dankmemer.services/api';
const centra = require('centra');
const { version } = require('../package.json');
function checkJSON(body) {
	try {
		if (!body) {
			console.log('no object was sent to get checked');
			return false;
		}
		const parse = JSON.parse(body);
		if (parse) return true;
		return false;
	} catch (e) {
		return false;
	}
}
function format(body) {
	if (checkJSON(body)) return JSON.parse(body);
	if (body.toString().startsWith('<!DOCTYPE html>')) return 'HTML ERROR';
	return body;
}
class DankClient {

	/**
   * @class
   * @param {string} token API token
   */
	constructor(token) {
		if (!token) throw new TypeError('Token was not provided!');
		Object.defineProperty(this, 'token', { value: token });
	}
	/**
   * abandon
   * @param {String} text text to generate meme
   */

	async abandon(text) {
		const data = await centra(base)
			.path('abandon')
			.query('text', text)
			.header('Authorization', this.token)
			.send();
		return format(data.body);
	}

	/**
   * aborted
   * @param {String} avatar1 avatar
   */

	async aborted(avatar1) {
		const data = await centra(base)
			.path('aborted')
			.query('avatar1', avatar1)
			.header('Authorization', this.token)
			.send();
		return format(data.body);
	}

	/**
   * affect
   * @param {String} avatar1 avatar
   */

	async affect(avatar1) {
		const data = await centra(base)
			.path('affect')
			.query('avatar1', avatar1)
			.header('Authorization', this.token)
			.send();
		return format(data.body);
	}

	/**
   * airpods
   * @param {String} avatar1 avatar
   */

	async airpods(avatar1) {
		const data = await centra(base)
			.path('airpods')
			.query('avatar1', avatar1)
			.header('Authorization', this.token)
			.send();
		return format(data.body);
	}

	/**
   * america
   * @param {String} avatar1 avatar
   */

	async america(avatar1) {
		const data = await centra(base)
			.path('america')
			.query('avatar1', avatar1)
			.header('Authorization', this.token)
			.send();
		return format(data.body);
	}

	/**
   * armor
   * @param {String} text text
   */

	async armor(text) {
		const data = await centra(base)
			.path('armor')
			.query('text', text)
			.header('Authorization', this.token)
			.send();
		return format(data.body);
	}

	/**
   * balloon
   * @param {String} text text
   */

	async balloon(text) {
		const data = await centra(base)
			.path('balloon')
			.query('text', text)
			.header('Authorization', this.token)
			.send();
		return format(data.body);
	}

	/**
   * bed
   * @param {String} avatar1 avatar1
   * @param {String} avatar2 avatar2
   */

	async bed(avatar1, avatar2) {
		const data = await centra(base)
			.path('bed')
			.query('avatar1', avatar1)
			.query('avatar2', avatar2)
			.header('Authorization', this.token)
			.send();
		return format(data.body);
	}

	/**
   * bongocat
   * @param {String} avatar1 avatar1
   */

	async bongocat(avatar1) {
		const data = await centra(base)
			.path('bongocat')
			.query('avatar1', avatar1)
			.header('Authorization', this.token)
			.send();
		return format(data.body);
	}

	/**
   * boo
   * @param {String} text text
   */

	async boo(text) {
		const data = await centra(base)
			.path('boo')
			.query('text', text)
			.header('Authorization', this.token)
			.send();
		return format(data.body);
	}

	/**
   * brain
   * @param {String} text text
   */

	async brain(text) {
		const data = await centra(base)
			.path('brain')
			.query('text', text)
			.header('Authorization', this.token)
			.send();
		return format(data.body);
	}

	/**
   * brazzers
   * @param {String} avatar1 avatar1
   */

	async brazzers(avatar1) {
		const data = await centra(base)
			.path('brazzers')
			.query('avatar1', avatar1)
			.header('Authorization', this.token)
			.send();
		return format(data.body);
	}

	/**
   * byemom
   * @param {String} avatar1 avatar1
   * @param {String} username1 username1
   * @param {String} text text
   */

	async byemom(avatar1, username1, text) {
		const data = await centra(base)
			.path('byemom')
			.query('avatar1', avatar1)
			.query('username1', username1)
			.query('text', text)
			.header('Authorization', this.token)
			.send();
		return format(data.body);
	}

	/**
   * cancer
   * @param {String} avatar1 avatar1
   */

	async cancer(avatar1) {
		const data = await centra(base)
			.path('cancer')
			.query('avatar1', avatar1)
			.header('Authorization', this.token)
			.send();
		return format(data.body);
	}

	/**
   * changemymind
   * @param {String} text text
   */

	async changemymind(text) {
		const data = await centra(base)
			.path('changemymind')
			.query('text', text)
			.header('Authorization', this.token)
			.send();
		return format(data.body);
	}

	/**
   * cheating
   * @param {String} text text
   */

	async cheating(text) {
		const data = await centra(base)
			.path('cheating')
			.query('text', text)
			.header('Authorization', this.token)
			.send();
		return format(data.body);
	}

	/**
   * citation
   * @param {String} text text
   */

	async citation(text) {
		const data = await centra(base)
			.path('citation')
			.query('text', text)
			.header('Authorization', this.token)
			.send();
		return format(data.body);
	}

	/**
   * communism
   * @param {String} avatar1 avatar1
   */

	async communism(avatar1) {
		const data = await centra(base)
			.path('communism')
			.query('avatar1', avatar1)
			.header('Authorization', this.token)
			.send();
		return format(data.body);
	}

	/**
   * confusedcat
   * @param {String} text text
   */

	async confusedcat(text) {
		const data = await centra(base)
			.path('confusedcat')
			.query('text', text)
			.header('Authorization', this.token)
			.send();
		return format(data.body);
	}

	/**
   * corporate
   * @param {String} avatar1 avatar1
   */

	async corporate(avatar1) {
		const data = await centra(base)
			.path('corporate')
			.query('avatar1', avatar1)
			.header('Authorization', this.token)
			.send();
		return format(data.body);
	}

	/**
   * crab
   * This endpoint returns an MP4 file. Make sure your application knows how to handle this format. Malformed requests count against your ratelimit for this endpoint. Separate text with a comma.
   * @param {String} text text
   */

	async crab(text) {
		const data = await centra(base)
			.path('crab')
			.query('text', text)
			.header('Authorization', this.token)
			.send();
		return format(data.body);
	}

	/**
   * cry
   * @param {String} text text
   */

	async cry(text) {
		const data = await centra(base)
			.path('cry')
			.query('text', text)
			.header('Authorization', this.token)
			.send();
		return format(data.body);
	}

	// // Dank Memer \\\\
	/**
   * dab
   * @param {String} avatar1 avatar
   */

	async dab(avatar1) {
		const data = await centra(base)
			.path('dab')
			.query('avatar1', avatar1)
			.header('Authorization', this.token)
			.send();
		return format(data.body);
	}

	/**
   * dank
   * @param {String} avatar1 avatar
   */

	async dank(avatar1) {
		const data = await centra(base)
			.path('dank')
			.query('avatar1', avatar1)
			.header('Authorization', this.token)
			.send();
		return format(data.body);
	}

	/**
   * deepfry
   * @param {String} avatar1 avatar
   */

	async deepfry(avatar1) {
		const data = await centra(base)
			.path('deepfry')
			.query('avatar1', avatar1)
			.header('Authorization', this.token)
			.send();
		return format(data.body);
	}

	/**
   * delete
   * @param {String} avatar1 avatar
   */

	async delete(avatar1) {
		const data = await centra(base)
			.path('delete')
			.query('avatar1', avatar1)
			.header('Authorization', this.token)
			.send();
		return format(data.body);
	}

	/**
   * disability
   * @param {String} avatar1 avatar
   */

	async disability(avatar1) {
		const data = await centra(base)
			.path('disability')
			.query('avatar1', avatar1)
			.header('Authorization', this.token)
			.send();
		return format(data.body);
	}

	/**
   * doglemon
   * @param {String} text text
   */

	async doglemon(text) {
		const data = await centra(base)
			.path('doglemon')
			.query('text', text)
			.header('Authorization', this.token)
			.send();
		return format(data.body);
	}

	/**
   * door
   * @param {String} avatar1 avatar1
   */

	async door(avatar1) {
		const data = await centra(base)
			.path('door')
			.query('avatar1', avatar1)
			.header('Authorization', this.token)
			.send();
		return format(data.body);
	}

	/**
   * egg
   * @param {String} avatar1 avatar1
   */

	async egg(avatar1) {
		const data = await centra(base)
			.path('egg')
			.query('avatar1', avatar1)
			.header('Authorization', this.token)
			.send();
		return format(data.body);
	}

	/**
   * excuseme
   * @param {String} text text
   */

	async excuseme(text) {
		const data = await centra(base)
			.path('excuseme')
			.query('text', text)
			.header('Authorization', this.token)
			.send();
		return format(data.body);
	}

	/**
   * expanddong
   * @param {String} text text
   */

	async expanddong(text) {
		const data = await centra(base)
			.path('expanddong')
			.query('text', text)
			.header('Authorization', this.token)
			.send();
		return format(data.body);
	}

	/**
   * facts
   * @param {String} text text
   */

	async facts(text) {
		const data = await centra(base)
			.path('facts')
			.query('text', text)
			.header('Authorization', this.token)
			.send();
		return format(data.body);
	}

	/**
   * failure
   * @param {String} avatar1 avatar1
   */

	async failure(avatar1) {
		const data = await centra(base)
			.path('failure')
			.query('avatar1', avatar1)
			.header('Authorization', this.token)
			.send();
		return format(data.body);
	}

	/**
   * fakenews
   * @param {String} avatar1 avatar1
   */

	async fakenews(avatar1) {
		const data = await centra(base)
			.path('fakenews')
			.query('avatar1', avatar1)
			.header('Authorization', this.token)
			.send();
		return format(data.body);
	}

	/**
   * fedora
   * @param {String} avatar1 avatar1
   */

	async fedora(avatar1) {
		const data = await centra(base)
			.path('fedora')
			.query('avatar1', avatar1)
			.header('Authorization', this.token)
			.send();
		return format(data.body);
	}

	/**
   * floor
   * @param {String} avatar1 avatar1
   * @param {String} text text
   */

	async floor(avatar1, text) {
		const data = await centra(base)
			.path('floor')
			.query('avatar1', avatar1)
			.query('text', text)
			.header('Authorization', this.token)
			.send();
		return format(data.body);
	}

	/**
   * fuck
   * @param {String} text text
   */

	async fuck(text) {
		const data = await centra(base)
			.path('fuck')
			.query('text', text)
			.header('Authorization', this.token)
			.send();
		return format(data.body);
	}
	/**
   * garfield
   * @param {String} avatar1 avatar
   * @param {String} text text
   */

	async garfield(avatar1, text) {
		const data = await centra(base)
			.path('garfield')
			.query('avatar1', avatar1)
			.query('text', text)
			.header('Authorization', this.token)
			.send();
		return format(data.body);
	}
	/**
   * gay
   * @param {String} avatar1 avatar
   */

	async gay(avatar1) {
		const data = await centra(base)
			.path('gay')
			.query('avatar1', avatar1)
			.header('Authorization', this.token)
			.send();
		return format(data.body);
	}

	/**
   * goggles
   * @param {String} avatar1 avatar
   */

	async goggles(avatar1) {
		const data = await centra(base)
			.path('goggles')
			.query('avatar1', avatar1)
			.header('Authorization', this.token)
			.send();
		return format(data.body);
	}

	/**
   * hitler
   * @param {String} avatar1 avatar
   */

	async hitler(avatar1) {
		const data = await centra(base)
			.path('hitler')
			.query('avatar1', avatar1)
			.header('Authorization', this.token)
			.send();
		return format(data.body);
	}

	/**
   * humansgood
   * @param {String} text text
   */

	async humansgood(text) {
		const data = await centra(base)
			.path('humansgood')
			.query('text', text)
			.header('Authorization', this.token)
			.send();
		return format(data.body);
	}

	/**
   * inator
   * @param {String} text text
   */

	async inator(text) {
		const data = await centra(base)
			.path('inator')
			.query('text', text)
			.header('Authorization', this.token)
			.send();
		return format(data.body);
	}

	/**
   * invert
   * @param {String} avatar1 avatar1
   */

	async invert(avatar1) {
		const data = await centra(base)
			.path('invert')
			.query('avatar1', avatar1)
			.header('Authorization', this.token)
			.send();
		return format(data.body);
	}

	/**
   * jail
   * @param {String} avatar1 avatar1
   */

	async jail(avatar1) {
		const data = await centra(base)
			.path('jail')
			.query('avatar1', avatar1)
			.header('Authorization', this.token)
			.send();
		return format(data.body);
	}

	/**
   * justpretending
   * @param {String} text text
   */

	async justpretending(text) {
		const data = await centra(base)
			.path('justpretending')
			.query('text', text)
			.header('Authorization', this.token)
			.send();
		return format(data.body);
	}

	/**
   * kimborder
   * @param {String} avatar1 avatar1
   */

	async kimborder(avatar1) {
		const data = await centra(base)
			.path('kimboarder')
			.query('avatar1', avatar1)
			.header('Authorization', this.token)
			.send();
		return format(data.body);
	}

	/**
   * knowyourlocation
   * @param {String} text text
   */

	async knowyourlocation(text) {
		const data = await centra(base)
			.path('knowyourlocation')
			.query('text', text)
			.header('Authorization', this.token)
			.send();
		return format(data.body);
	}

	/**
   * kowalski
   * @param {String} text text
   */

	async kowalski(text) {
		const data = await centra(base)
			.path('kowalski')
			.query('text', text)
			.header('Authorization', this.token)
			.send();
		return format(data.body);
	}

	/**
   * laid
   * @param {String} avatar1 avatar1
   */

	async laid(avatar1) {
		const data = await centra(base)
			.path('laid')
			.query('avatar1', avatar1)
			.header('Authorization', this.token)
			.send();
		return format(data.body);
	}

	/**
   * lick
   * @param {String} text text
   */

	async lick(text) {
		const data = await centra(base)
			.path('lick')
			.query('text', text)
			.header('Authorization', this.token)
			.send();
		return format(data.body);
	}

	/**
   * madethis
   * @param {String} avatar1 avatar1
   * @param {String} avatar2 avatar2
   */

	async madethis(avatar1, avatar2) {
		const data = await centra(base)
			.path('disability')
			.query('avatar1', avatar1)
			.query('avatar2', avatar2)
			.header('Authorization', this.token)
			.send();
		return format(data.body);
	}
	/**
   * magik
   * @param {String} avatar1 avatar1
   */

	async magik(avatar1) {
		const data = await centra(base)
			.path('magik')
			.query('avatar1', avatar1)
			.header('Authorization', this.token)
			.send();
		return format(data.body);
	}

	/**
   * master
   * @param {String} text text
   */

	async master(text) {
		const data = await centra(base)
			.path('master')
			.query('text', text)
			.header('Authorization', this.token)
			.send();
		return format(data.body);
	}

	/**
   * meme
   * This endpoint works a bit differently from the other endpoints.
   * This endpoint takes in top_text and bottom_text parameters instead of text.
   * It also supports color and font parameters.
   * Fonts supported are: arial, arimobold, impact, robotomedium, robotoregular, sans, segoeuireg, tahoma and verdana.
   * Colors can be defined with HEX codes or web colors, e.g. black, white, orange etc. Try your luck ;)
   * The default is Impact in white
   * @param {String} avatar1 avatar1
   * @param {String} top_text top_text
   * @param {String} bottom_text bottom_text
   * @param {String} color color
   * @param {String} font font
   */

	async meme(avatar1, top_text, bottom_text, color, font) {
		const data = await centra(base)
			.path('meme')
			.query('avatar1', avatar1)
			.query('top_text', top_text)
			.query('bottom_text', bottom_text)
			.query('color', color || 'white')
			.query('font', font || 'arial')
			.header('Authorization', this.token)
			.send();
		return format(data.body);
	}

	/**
   * note
   * @param {String} text text
   */

	async note(text) {
		const data = await centra(base)
			.path('note')
			.query('text', text)
			.header('Authorization', this.token)
			.send();
		return format(data.body);
	}

	/**
   * nothing
   * @param {String} text text
   */

	async nothing(text) {
		const data = await centra(base)
			.path('nothing')
			.query('text', text)
			.header('Authorization', this.token)
			.send();
		return format(data.body);
	}

	/**
   * ohno
   * @param {String} text text
   */

	async ohno(text) {
		const data = await centra(base)
			.path('ohno')
			.query('text', text)
			.header('Authorization', this.token)
			.send();
		return format(data.body);
	}

	/**
   * piccolo
   * @param {String} text text
   */

	async piccolo(text) {
		const data = await centra(base)
			.path('piccolo')
			.query('text', text)
			.header('Authorization', this.token)
			.send();
		return format(data.body);
	}

	/**
   * plan
   * @param {String} text text
   */

	async plan(text) {
		const data = await centra(base)
			.path('plan')
			.query('text', text)
			.header('Authorization', this.token)
			.send();
		return format(data.body);
	}

	/**
   * presentation
   * @param {String} text text
   */

	async presentation(text) {
		const data = await centra(base)
			.path('presentation')
			.query('text', text)
			.header('Authorization', this.token)
			.send();
		return format(data.body);
	}
	/**
   * quote
   * @param {String} avatar1 avatar1
   * @param {String} username1 username1
   * @param {String} text text
   */

	async quote(avatar1, username1, text) {
		const data = await centra(base)
			.path('quote')
			.query('avatar1', avatar1)
			.query('username1', username1)
			.query('text', text)
			.send();
		return format(data.body);
	}

	/**
   * radialblur
   * @param {String} avatar1 avatar1
   */

	async radialblur(avatar1) {
		const data = await centra(base)
			.path('disability')
			.query('avatar1', avatar1)
			.header('Authorization', this.token)
			.send();
		return format(data.body);
	}

	/**
   * rip
   * @param {String} avatar1 avatar1
   */

	async rip(avatar1) {
		const data = await centra(base)
			.path('rip')
			.query('avatar1', avatar1)
			.header('Authorization', this.token)
			.send();
		return format(data.body);
	}

	/**
   * roblox
   * @param {String} avatar1 avatar1
   */

	async roblox(avatar1) {
		const data = await centra(base)
			.path('roblox')
			.query('avatar1', avatar1)
			.header('Authorization', this.token)
			.send();
		return format(data.body);
	}

	/**
   * salty
   * @param {String} avatar1 avatar1
   */

	async salty(avatar1) {
		const data = await centra(base)
			.path('salty')
			.query('avatar1', avatar1)
			.header('Authorization', this.token)
			.send();
		return format(data.body);
	}

	/**
   * satan
   * @param {String} avatar1 avatar1
   */

	async satan(avatar1) {
		const data = await centra(base)
			.path('satan')
			.query('avatar1', avatar1)
			.header('Authorization', this.token)
			.send();
		return format(data.body);
	}

	/**
   * savehumanity
   * @param {String} text text
   */

	async savehumanity(text) {
		const data = await centra(base)
			.path('savehumanity')
			.query('text', text)
			.header('Authorization', this.token)
			.send();
		return format(data.body);
	}

	/**
   * screams
   * @param {String} avatar1 avatar1
   * @param {String} avatar2 avatar2
   */

	async screams(avatar1, avatar2) {
		const data = await centra(base)
			.path('screams')
			.query('avatar1', avatar1)
			.query('avatar2', avatar2)
			.header('Authorization', this.token)
			.send();
		return format(data.body);
	}

	/**
   * shit
   * @param {String} text text
   */

	async shit(text) {
		const data = await centra(base)
			.path('shit')
			.query('text', text)
			.header('Authorization', this.token)
			.send();
		return format(data.body);
	}

	/**
   * sickban
   * @param {String} avatar1 avatar1
   */

	async sickban(avatar1) {
		const data = await centra(base)
			.path('sneakyfox')
			.query('avatar1', avatar1)
			.header('Authorization', this.token)
			.send();
		return format(data.body);
	}

	/**
   * slap
   * @param {String} avatar1 avatar1
   * @param {String} avatar2 avatar2
   */

	async slap(avatar1, avatar2) {
		const data = await centra(base)
			.path('slap')
			.query('avatar1', avatar1)
			.query('avatar2', avatar2)
			.header('Authorization', this.token)
			.send();
		return format(data.body);
	}

	/**
   * slapsroof
   * @param {String} text text
   */

	async slapsroof(text) {
		const data = await centra(base)
			.path('slapsroof')
			.query('text', text)
			.header('Authorization', this.token)
			.send();
		return format(data.body);
	}

	/**
   * sneakyfox
   * @param {String} text text
   */

	async sneakyfox(text) {
		const data = await centra(base)
			.path('sneakyfox')
			.query('text', text)
			.header('Authorization', this.token)
			.send();
		return format(data.body);
	}

	/**
   * spank
   * @param {String} avatar1 avatar1
   * @param {String} avatar2 avatar2
   */

	async spank(avatar1, avatar2) {
		const data = await centra(base)
			.path('spank')
			.query('avatar1', avatar1)
			.query('avatar2', avatar2)
			.header('Authorization', this.token)
			.send();
		return format(data.body);
	}

	/**
   * stroke
   * @param {String} text text
   */

	async stroke(text) {
		const data = await centra(base)
			.path('stroke')
			.query('text', text)
			.header('Authorization', this.token)
			.send();
		return format(data.body);
	}

	/**
   * surprised
   * @param {String} text text
   */

	async surprised(text) {
		const data = await centra(base)
			.path('suprised')
			.query('text', text)
			.header('Authorization', this.token)
			.send();
		return format(data.body);
	}

	/**
   * sword
   * @param {String} text text
   * @param {String} username1 username1
   */

	async sword(text, username1) {
		const data = await centra(base)
			.path('sword')
			.query('text', text)
			.query('username1', username1)
			.header('Authorization', this.token)
			.send();
		return format(data.body);
	}

	/**
   * thesearch
   * @param {String} text text
   */

	async thesearch(text) {
		const data = await centra(base)
			.path('thesearch')
			.query('text', text)
			.header('Authorization', this.token)
			.send();
		return format(data.body);
	}

	/**
   * trash
   * @param {String} avatar1 avatar1
   */

	async trash(avatar1) {
		const data = await centra(base)
			.path('trash')
			.query('avatar1', avatar1)
			.header('Authorization', this.token)
			.send();
		return format(data.body);
	}

	/**
   * tiger
   * @param {String} avatar1 avatar1
   */

	async tiger(avatar1) {
		const data = await centra(base)
			.path('tiger')
			.query('avatar1', avatar1)
			.header('Authorization', this.token)
			.send();
		return format(data.body);
	}

	/**
   * trigger
   * @param {String} avatar1 avatar1
   */

	async trigger(avatar1) {
		const data = await centra(base)
			.path('trigger')
			.query('avatar1', avatar1)
			.header('Authorization', this.token)
			.send();
		return format(data.body);
	}

	/**
   * tweet
   * @param {String} avatar1 avatar1
   * @param {String} username1 username1
   * @param {String} text text
   */

	async tweet(avatar1, username1, text) {
		const data = await centra(base)
			.path('tweet')
			.query('avatar1', avatar1)
			.query('username1', username1)
			.query('text', text)
			.header('Authorization', this.token)
			.send();
		return format(data.body);
	}

	/**
   * ugly
   * @param {String} avatar1 avatar1
   */

	async ugly(avatar1) {
		const data = await centra(base)
			.path('ugly')
			.query('avatar1', avatar1)
			.header('Authorization', this.token)
			.send();
		return format(data.body);
	}

	/**
   * unpopular
   * @param {String} avatar1 avatar1
   * @param {String} text text
   */

	async unpopular(avatar1, text) {
		const data = await centra(base)
			.pat('unpopular')
			.query('avatar1', avatar1)
			.query('text', text)
			.header('Authorization', this.token)
			.send();
		return format(data.body);
	}

	/**
   * violence
   * @param {String} text text
   */

	async violence(text) {
		const data = await centra(base)
			.path('violence')
			.query('text', text)
			.header('Authorization', this.token)
			.send();
		return format(data.body);
	}

	/**
   * violentsparks
   * @param {String} text text
   */

	async violentsparks(text) {
		const data = await centra(base)
			.path('violentsparks')
			.query('text', text)
			.header('Authorization', this.token)
			.send();
		return format(data.body);
	}

	/**
   * vr
   * @param {String} text text
   */

	async vr(text) {
		const data = await centra(base)
			.path('vr')
			.query('text', text)
			.header('Authorization', this.token)
			.send();
		return format(data.body);
	}

	/**
   * walking
   * @param {String} text text
   */

	async walking(text) {
		const data = await centra(base)
			.path('walking')
			.query('text', text)
			.header('Authorization', this.token)
			.send();
		return format(data.body);
	}

	/**
   * wanted
   * @param {String} avatar1 avatar1
   */

	async wanted(avatar1) {
		const data = await centra(base)
			.path('wanted')
			.query('avatar1', avatar1)
			.header('Authorization', this.token)
			.send();
		return format(data.body);
	}

	/**
   * wrap
   * @param {String} avatar1 avatar1
   */

	async wrap(avatar1) {
		const data = await centra(base)
			.path('wrap')
			.query('avatar1', avatar1)
			.header('Authorization', this.token)
			.send();
		return format(data.body);
	}

	/**
   * whodidthis
   * @param {String} avatar1 avatar1
   */

	async whodidthis(avatar1) {
		const data = await centra(base)
			.path('whodidthis')
			.query('avatar1', avatar1)
			.header('Authorization', this.token)
			.send();
		return format(data.body);
	}
	/**
   * whothisis
   * @param {String} avatar1 avatar1
   */

	async whothisis(avatar1) {
		const data = await centra(base)
			.path('whothisis')
			.query('avatar1', avatar1)
			.header('Authorization', this.token)
			.send();
		return format(data.body);
	}
	/**
   * yomomma
   */

	async yomomma() {
		const data = await centra(base)
			.path('yomomma')
			.header('Authorization', this.token)
			.send();
		data.body = JSON.parse(data.body);
		return format(data.body);
	}

	/**
   * youtube
   * @param {String} avatar1 avatar1
   * @param {String} username1 username1
   * @param {String} text text
   */

	async youtube(avatar1, username1, text) {
		const data = await centra(base)
			.path('youtube')
			.query('avatar1', avatar1)
			.query('username1', username1)
			.query('text', text)
			.header('Authorization', this.token)
			.send();
		return format(data.body);
	}
	async info() {
		const data = await centra(base)
			.path('abandon')
			.query('hey')
			.header('Authorization', this.token)
			.send();
		const object = new Map();
		object.remaining = data.headers['x-global-ratelimit-limit'];
		object.limit = data.headers['x-global-ratelimit-remaining'];
		object.reset = data.headers['x-global-ratelimit-reset'];
		object.status = data.statusCode;
		return object;
	}
	async Version() {
		return version;
	}

}
module.exports = DankClient;
