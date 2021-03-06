class Api::BenchesController < ApplicationController
    before_action :require_logged_in, only: [:create]

    def index
        @benches = Bench.all
        render :index
    end

    def create
        @bench = Bench.new(bench_params)
        if @bench.save
            render :show
        else
            render json: ['Error creating bench']
        end
    end

    private

    def bench_params
        params.require(:bench).permit(:description, :lat, :lng)
    end
end