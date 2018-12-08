class Api::MenusController < ApplicationController
  before_action :set_menu, only: [:destroy, :show]

  def index 
    render json: Menu.order(:name)
  end

  def create 
    menu = Menu.new(menus_params)
    if menu.save
      render json: menu
    else
      render json: { errors: menu.errors }
    end
  end

  def destroy 
    @menu.destroy
    render json: {message: "Menu Removed"}
  end

  private 

    def menu_params 
      param.require(:menu).permit(:name)
    end

    def set_menu 
      @menu = Menu.find(params[:id])
    end
end
