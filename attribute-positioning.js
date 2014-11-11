/*
 Block Quote
 */

SirTrevor.Blocks.AttributePositioning = (function () {

    var template = _.template([
        '<label class="st-input-label"> <%= i18n.t("blocks:attribute_positioning:attribute_field") %></label>',
        '<input maxlength="140" name="attribute" placeholder="<%= i18n.t("blocks:attribute_positioning:attribute_field") %>"',
        ' class="st-input-string st-required js-attribute-input" type="text" />'
    ].join("\n"));

    return SirTrevor.Block.extend({

        type: "attribute_positioning",

        title: function () {
            return i18n.t('blocks:attribute_positioning:title');
        },

        icon_name: 'attribute_positioning',

        editorHTML: function () {
            return template(this);
        },

        loadData: function (data) {
            this.$('.js-attribute-input').val(data.attribute);
        },

        toMarkdown: function (markdown) {
            return markdown.replace(/^(.+)$/mg, "> $1");
        }

    });

})();