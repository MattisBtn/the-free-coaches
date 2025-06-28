<template>
    <div ref="chartContainer" class="w-full h-32" />
</template>

<script lang="ts" setup>
import { Chart as ChartJS } from 'chart.js'
import { onBeforeUnmount, onMounted, ref } from 'vue'

const chartContainer = ref<HTMLCanvasElement | null>(null)
let chart: ChartJS | null = null

const revenueData = [320, 890, 2800, 750, 180, 1200]
const months = ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Jun']

onMounted(() => {
    if (chartContainer.value) {
        const canvas = document.createElement('canvas')
        chartContainer.value.appendChild(canvas)

        const ctx = canvas.getContext('2d')
        if (ctx) {
            chart = new ChartJS(ctx, {
                type: 'line',
                data: {
                    labels: months,
                    datasets: [{
                        label: 'Revenus €',
                        data: revenueData,
                        borderColor: 'rgb(34, 197, 94)',
                        backgroundColor: 'rgba(34, 197, 94, 0.1)',
                        borderWidth: 2,
                        fill: true,
                        tension: 0.4,
                        pointBackgroundColor: 'rgb(34, 197, 94)',
                        pointBorderColor: 'rgb(34, 197, 94)',
                        pointBorderWidth: 2,
                        pointRadius: 4,
                        pointHoverRadius: 6,
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    interaction: {
                        intersect: false,
                        mode: 'index',
                    },
                    plugins: {
                        legend: {
                            display: false
                        },
                        tooltip: {
                            backgroundColor: 'rgba(0, 0, 0, 0.8)',
                            titleColor: 'rgba(255, 255, 255, 0.9)',
                            bodyColor: 'rgba(255, 255, 255, 0.8)',
                            borderColor: 'rgba(34, 197, 94, 0.3)',
                            borderWidth: 1,
                            cornerRadius: 8,
                            displayColors: false,
                            callbacks: {
                                title: function (context) {
                                    return `${context[0].label} 2024`
                                },
                                label: function (context) {
                                    return `Revenus: ${context.formattedValue}€`
                                }
                            }
                        }
                    },
                    scales: {
                        x: {
                            display: true,
                            grid: {
                                display: false
                            },
                            ticks: {
                                color: 'rgba(255, 255, 255, 0.4)',
                                font: {
                                    size: 12
                                }
                            }
                        },
                        y: {
                            display: false,
                            grid: {
                                display: false
                            }
                        }
                    },
                    elements: {
                        point: {
                            hoverBorderWidth: 3
                        }
                    }
                }
            })
        }
    }
})

onBeforeUnmount(() => {
    if (chart) {
        chart.destroy()
    }
})
</script>